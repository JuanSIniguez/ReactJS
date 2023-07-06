import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
	return (
		<Card
			key={product.sku}
			style={{ width: "18rem" }}
			className="px-1 m-3"
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
	);
};
