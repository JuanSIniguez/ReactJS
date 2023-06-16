import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";
import  logo  from "../img/logo.png"

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home"><img
              src={logo}
              width="150vh"
			  height="30vh"
              className="d-inline-block align-top"
            /></Navbar.Brand>
				 
				<Nav className="me-auto">
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#">Productos</Nav.Link>
					<Nav.Link href="#">Pricing</Nav.Link>
					<Nav.Link href="#"></Nav.Link>
					<CartWidget />
				</Nav>
			</Container>
		</Navbar>
	);
};
