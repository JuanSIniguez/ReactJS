import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
export const Item = ({ product }) => {
	return (
		<Col xs={12} md={6} lg={3}>
			<Card key={product.sku} className="my-3" border="dark">
				<Card.Img variant="top" src={product.img} />
				<Card.Body>
					<Card.Title className="fs-6">{product.nombre}</Card.Title>
					<Card.Text className="my-2 d-flex flex-wrap ">
						({product.sku}) - Stock Disponible: {product.stock}
					</Card.Text>
					<Card.Footer className="text-end bg-transparent">
						<Link to={`/product/${product.sku}`}>
							<Button variant="outline-secondary" className="text-end">
								Ver detalle
							</Button>
						</Link>
					</Card.Footer>
				</Card.Body>
			</Card>
		</Col>
	);
};
