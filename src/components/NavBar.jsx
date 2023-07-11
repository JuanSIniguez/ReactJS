import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import logo from "../img/logo.png";
import data from "../data/arts.json";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const familia = data.map((product) => product.familia);
const uniqueF = new Set(familia);

export const NavBar = () => {
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
							className=/* d-inline-block align-to  */ "px-5"
							alt="SkateBoard"
						/>
					</NavLink>
				</Nav.Item>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					className="bg-transparent"
				/>
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="bg-transparent d-flex-inline"
				>
					<Nav.Item>
						<NavDropdown
							title="Productos"
							className="text-white
						bg-dark m-0"
							id="collasible-nav-dropdown"
						>
							{[...uniqueF].map((id) => (
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
					<Nav.Item className="float-right">
						<CartWidget />
					</Nav.Item>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
