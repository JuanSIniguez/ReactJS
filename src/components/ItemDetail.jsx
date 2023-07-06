import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
	console.log(product);
	return (
		<>
			<Card>
				<Card.Header as="h5">TITULO {product.nombre}</Card.Header>
				<Card.Body>
					<Card.Title>Special title treatment {product.stock}</Card.Title>
					<Card.Text>
						With supporting text below as a natural lead-in to additional
						content.
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};
