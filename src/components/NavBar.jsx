import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import logo from "../img/logo.png";
import data from "../data/arts.json";
import { NavLink } from "react-router-dom";

const familia = data.map((product) => product.familia);
const uniqueF = new Set(familia);

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink to="/">
					<img
						src={logo}
						width="150vh"
						height="30vh"
						className="d-inline-block align-top"
					/>
				</NavLink>

				<Nav className="mx-auto">
					{[...uniqueF].map((id) => (
						<NavLink key={id} className="nav-link" to={`/category/${id}`}>
							{id}
						</NavLink>
					))}
				</Nav>
				<CartWidget />
			</Container>
		</Navbar>
	);
};
