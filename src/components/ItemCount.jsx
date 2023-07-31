import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Toast from "react-bootstrap/Toast";

export const ItemCount = ({ stock, onAdd, initial }) => {
	const [quantity, setQuantity] = useState(initial);
	const [show, setShow] = useState(false);

	const handleIncrement = () => {
		if (stock > quantity) setQuantity(quantity + 1);
	};
	const handleDecrement = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	const availableStock = () => {
		if (stock > quantity) setShow(true);
	};

	return (
		<>
			<Container
				border="secondary"
				className="d-flex justify-content-between "
			>
				<Button variant="outline-danger" onClick={handleDecrement}>
					-
				</Button>
				<h3>{quantity}</h3>
				<Button variant="outline-success" onClick={handleIncrement}>
					+
				</Button>
			</Container>
			<Button
				variant="success"
				onClick={() => onAdd(quantity) & availableStock()}
				className="m-3 float-end"
			>
				Agregar al carrito
			</Button>
			<Toast
				bg="danger"
				className="d-inline-block m-1"
				onClose={() => setShow(false)}
				show={show}
				delay={1000}
				autohide
			>
				<Toast.Header>No hay suficiente stock</Toast.Header>
			</Toast>
		</>
	);
};
