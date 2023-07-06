/* Contador para los productos. Falta darle estilo */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const ItemCount = ({ stock, onAdd, initial }) => {
	const [cant, setCant] = useState(1);
	useEffect(() => {
		console.log(cant);
	}, [cant]);

	/* 	onAdd = () => {
		cant > 1 && cant <=stock ? setCant(cant+1) : <div>No hay suficiente stock</div>
	}; */

	return (
		<ButtonGroup className="">
			<Button
				variant="outline-danger"
				onClick={() => (cant > 1 ? setCant(cant - 1) : <div>Test</div>)}
			>
				-
			</Button>
			<span className=" text-center"> {cant} </span>
			<Button
				variant="outline-success"
				onClick={() => (cant < stock ? setCant(cant + 1) : <div>Test</div>)}
			>
				+
			</Button>
		</ButtonGroup>
	);
};
