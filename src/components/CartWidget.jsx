import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import shoppingcartpng from "../assets/shoppingcart.png";
export const CartWidget = () => (
	<Button className="d-flex-wrap mx-0 px-2">
		<img
			src={shoppingcartpng}
			alt=""
			width="15rem"
			height="15rem"
			className="d-flex-wrap "
		/>
		<Badge className="mx-2" bg="secondary">
			9
		</Badge>
	</Button>
);
