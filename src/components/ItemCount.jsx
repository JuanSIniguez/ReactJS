/* Contador para los productos. Falta darle estilo */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export const ItemCount = ({ stock, onAdd, initial }) => {
	const [cant, setCant] = useState(initial);
	useEffect(() => {}, [cant]);

	onAdd = () => {};

	return (
		<Container border="secondary" className="d-flex justify-content-between ">
			<Button
				variant="outline-danger"
				onClick={() => (cant > 1 ? setCant(cant - 1) : <div>Test</div>)}
			>
				-
			</Button>
			<h3>{cant}</h3>
			<Button
				variant="outline-success"
				onClick={() => (cant < stock ? setCant(cant + 1) : <div>Test</div>)}
			>
				+
			</Button>
		</Container>
	);
};
