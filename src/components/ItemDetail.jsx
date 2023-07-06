import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

export const ItemDetail = ({ product }) => {
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
							<Card.Text>{product.descripcion}</Card.Text>
							<ListGroup className="list-group-flush mb-3">
								<ListGroup.Item>Marca: {product.marca}</ListGroup.Item>
								<ListGroup.Item>
									Categoria: {product.categoria}
								</ListGroup.Item>
								<ListGroup.Item>
									Familia: {product.familia}
								</ListGroup.Item>
								<ListGroup.Item></ListGroup.Item>
							</ListGroup>
							<ItemCount stock={product.stock} initial={1} />
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};
