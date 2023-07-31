import { getFirestore, collection, getDocs } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
	const [family, setFamilies] = useState([]);

	useEffect(() => {
		const db = getFirestore();

		const refCollection = collection(db, "products");
		getDocs(refCollection).then((snapshot) => {
			const families = snapshot.docs.map((product) => product.data().family);
			const uniqueFamily = new Set(families);
			setFamilies([...uniqueFamily]);
		});
	}, []);

	return (
		<Navbar
			collapseOnSelect
			expand="md"
			bg="dark"
			variant="dark"
			className="sticky-top "
		>
			<Container fluid className="m-0 justify-content-start">
				<Nav.Item className=" d-flex ">
					<NavLink to="/">
						<img
							style={{ height: "8vh" }}
							src={logo}
							className="px-5"
							alt="SkateBoard"
						/>
					</NavLink>
				</Nav.Item>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className="bg-transparent"
				/>

				<Nav.Item>
					<NavDropdown
						title="Productos"
						className="text-white
						bg-dark m-0 h4"
						id="collasible-nav-dropdown"
						aria-controls="responsive-navbar-nav"
					>
						<NavLink
							key={"all"}
							className="nav-link m-0 p-0 text-white text-uppercase bg-dark"
							to={`/product/`}
						>
							Todos
						</NavLink>
						{[...family].map((id) => (
							<NavLink
								key={id}
								className="nav-link m-0 p-0 text-white text-uppercase bg-dark"
								to={`/category/${id}`}
							>
								{id}
							</NavLink>
						))}
					</NavDropdown>
				</Nav.Item>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="bg-transparent d-flex-inline justify-content-end"
				>
					<Nav.Item className="d-flex  flex-column">
						<CartWidget />
					</Nav.Item>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
