import { useState, useContext } from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { CartContext } from "../context/cartContext";

export const CartWidget = () => {
	const [open, setOpen] = useState(false);
	const { totalInCart } = useContext(CartContext);
	const { totalProductsInCart } = totalInCart();

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
				<NavLink to={`/cart/`}>
					<AiOutlineShoppingCart className="h4" />
				</NavLink>
				{!!totalInCart() && (
					<Badge bg="transparent">{totalProductsInCart}</Badge>
				)}
			</Button>
		</ButtonGroup>
	);
};
