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
		<Navbar bg="dark" variant="dark" className="sticky-top">
			<Container fluid className="m-0">
				<NavLink to="/">
					<img
						style={{ height: "8vh" }}
						src={logo}
						className="d-inline-block align-to px-5"
						alt="SkateBoard"
					/>
				</NavLink>

				<Nav>
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
