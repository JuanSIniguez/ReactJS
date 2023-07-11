import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
export const Item = ({ product }) => {
	return (
		<Col xs={12} md={6} lg={3}>
			<Card
				key={product.sku}
				style={{ width: "18rem" }}
				className="my-3"
				border="dark"
			>
				<Card.Img variant="top" src={product.img} />
				<Card.Body>
					<Card.Title className="fs-6">{product.nombre}</Card.Title>
					<Card.Text className="my-2 d-flex flex-wrap ">
						({product.sku}) - Stock Disponible: {product.stock}
					</Card.Text>
					<Link to={`/product/${product.sku}`}>
						<Button variant="outline-secondary" className="px-auto">
							Ver detalle
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};
