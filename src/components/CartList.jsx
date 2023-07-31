import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { CartDetail } from "./CartDetail";

import { CartContext } from "../context/cartContext";

export const CartList = () => {
	const { productsInCart, deleteProduct, totalInCart, clearCart } =
		useContext(CartContext);
	const { totalProductsInCart, totalOrderInCart } = totalInCart();
	return (
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
						<h5 className="text-end">Total: {totalOrderInCart}</h5>
					</th>
					<th colSpan={2}>
						<h5 className="text-end">Cantidad: {totalProductsInCart}</h5>
					</th>
					<th colSpan={1}>
						<Button variant="outline-danger" onClick={() => clearCart()}>
							Vaciar
						</Button>
					</th>
				</tr>
			</tbody>
		</Table>
	);
};
