import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";

export const CartWidget = () => {
	const [open, setOpen] = useState(false);

	return (
		<ButtonGroup className="d-flex">
			<Collapse in={open} dimension="width">
				<Form.Control
					type="text"
					placeholder="Ingrese su busqueda"
					className="my-auto"
					id="busquedaProducto"
				/>
			</Collapse>
			<Button
				onClick={() => setOpen(!open)}
				variant="transparent"
				className="text-white"
				aria-controls="search-collapse"
				aria-expanded={open}
			>
				<BsSearch className="h5" />
			</Button>
			<Button variant="transparent" className="text-white">
				<MdAccountCircle className="h4" />
			</Button>
			<Button variant="transparent" className="text-white">
				<AiOutlineShoppingCart className="h4" />
				<Badge bg="transparent">9</Badge>
			</Button>
		</ButtonGroup>
	);
};
