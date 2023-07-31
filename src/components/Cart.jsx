import { getFirestore, collection, addDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import { CartDetail } from "./CartDetail";
import { CartContext } from "../context/cartContext";

export const Cart = () => {
	const { productsInCart, deleteProduct, totalInCart, clearCart } =
		useContext(CartContext);

	const { totalProductsInCart, totalOrderInCart } = totalInCart();

	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
		address: "",
		suscription: false,
	});

	const handleChange = (ev) => {
		setFormValues((prev) => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}));
	};

	const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: productsInCart,
		};
		console.log(order);
		console.log(formValues);
		const db = getFirestore();
		const orderCollection = collection(db, "orders");

		addDoc(orderCollection, order).then((response) => {
			if (response.id) {
				alert("Su orden: " + response.id + " ha sido completada!");
				/* 	clearCart(); */
				console.log(response);
			} else {
				console.log(response);
			}
		});
	};

	return (
		<Container>
			<h3 className="h1 text-center my-4 underline">Tu carrito de compra</h3>
			{productsInCart.length === 0 ? (
				<Container
					style={{ height: "70vh" }}
					className="text-center d-flex flex-column justify-content-center"
				>
					<span>Todavía no agregaste ningún producto.</span>
					<NavLink to="/product/" className="m-auto">
						<Button variant="outline-primary">Seguí comprando</Button>
					</NavLink>
				</Container>
			) : (
				<>
					<Table responsive striped bordered hover>
						<thead>
							<tr>
								<th colSpan={6} className="text-center h3"></th>
							</tr>
							<tr>
								<th>#</th>
								<th>Producto</th>
								<th className="text-center ">Cantidad</th>
								<th className="text-center ">Precio</th>
								<th className="text-center ">Total</th>
								<th className="text-center ">Acciones</th>
							</tr>
						</thead>
						<tbody className="">
							{productsInCart.map((product) => (
								<CartDetail
									key={product.id}
									product={product}
									deleteProduct={deleteProduct}
									totalInCart={totalInCart}
								></CartDetail>
							))}
							<tr>
								<th colSpan={3}>
									<h5 className="text-end">
										Total: {totalOrderInCart}
									</h5>
								</th>
								<th colSpan={2}>
									<h5 className="text-end">
										Cantidad: {totalProductsInCart}
									</h5>
								</th>
								<th colSpan={1}>
									<Button
										variant="outline-danger"
										onClick={() => clearCart()}
									>
										Vaciar
									</Button>
								</th>
							</tr>
						</tbody>
					</Table>
					<Table responsive striped bordered hover>
						<tbody className="">
							<tr>
								<th colSpan={6} className="text-center h3">
									<Button variant="outline-success">
										Continua con tu compra
									</Button>
								</th>
							</tr>
							<tr>
								<th colSpan={6}>
									<Form>
										<Form.Group
											className="m-3  align-items-center"
											controlId="name"
										>
											<Form.Label className="flex-nowrap m-1 ">
												Nombre completo
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												value={formValues.name}
												type="text"
												name="name"
												placeholder="Ingrese su nombre completo"
											/>
										</Form.Group>
										<Form.Group
											className="m-3 align-items-center"
											controlId="phone"
										>
											<Form.Label className="m-1">
												Teléfono
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												value={formValues.phone}
												type="numeric"
												name="phone"
												placeholder="Ingrese su nombre completo"
											/>
										</Form.Group>
										<Form.Group className="m-3" controlId="email">
											<Form.Label className="m-1">
												Email address
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												value={formValues.email}
												type="text"
												name="email"
												placeholder="Enter email"
											/>
										</Form.Group>

										<Form.Group className="m-3" controlId="address">
											<Form.Label className="m-1">
												Dirección de envío:
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												value={formValues.address}
												type="text"
												name="address"
												placeholder="Ingrese su dirección"
											/>
										</Form.Group>
										<Form.Group
											className="m-3"
											controlId="suscription"
										>
											<Form.Check
												onChange={handleChange}
												value={formValues.suscription}
												type="checkbox"
												name="suscription"
												label="¿Quiere recibir nuestras ofertas?"
												className="m-1"
											/>
										</Form.Group>
										<Button
											variant="primary"
											type="submit"
											className="m-3"
											onClick={sendOrder}
										>
											Submit
										</Button>
									</Form>
								</th>
							</tr>
							<tr>
								<th colSpan={6}>
									<h4 className="text-center">
										Gracias por su compra!
									</h4>
								</th>
							</tr>
						</tbody>
					</Table>
				</>
			)}
		</Container>
	);
};
