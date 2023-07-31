import { useContext } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/cartContext";

export const ItemDetail = ({ product }) => {
	const { addProduct } = useContext(CartContext);
	const onAdd = (cant) => addProduct(product, cant);

	return (
		<>
			<Card className="my-5">
				<Card.Header as="h5" className="text-center">
					{product.nombre}
				</Card.Header>
				<Card.Body>
					<Row className="mb-auto">
						<Col>
							<Card.Img
								style={{ width: "5 rem" }}
								variant="top"
								src={product.img}
							/>
						</Col>
						<Col>
							<Card.Title>
								Código: ({product.sku}) - Stock Disponible:{" "}
								{product.stock}
							</Card.Title>
							<br></br>
							<Card.Text>{product.description}</Card.Text>
							<ListGroup className="list-group-flush mb-3">
								<ListGroup.Item>Marca: {product.brand}</ListGroup.Item>
								<ListGroup.Item>
									Categoria: {product.category}
								</ListGroup.Item>
								<ListGroup.Item>
									Familia: {product.family}
								</ListGroup.Item>
								<ListGroup.Item></ListGroup.Item>
							</ListGroup>
							<ItemCount
								stock={product.stock}
								onAdd={onAdd}
								initial={1}
							/>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};
