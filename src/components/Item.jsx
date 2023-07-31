import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";

import { Link } from "react-router-dom";

export const Item = ({ product }) => {
	return (
		<Col xs={12} md={6} lg={3}>
			<Card key={product.id} className="my-3 d-flex flex-wrap" border="dark">
				<Card.Img variant="top" src={product.img} />
				<Card.Body>
					<Card.Title className="fs-6">{product.name}</Card.Title>
					<Card.Text className="my-2 d-flex flex-wrap ">
						({product.sku}) - Stock Disponible: {product.stock}
					</Card.Text>
					<Card.Footer className="text-end bg-transparent">
						<Link to={`/product/${product.id}`}>
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
