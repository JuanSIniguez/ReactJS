import { Item } from "./Item";
import Row from "react-bootstrap/esm/Row";

export const ItemList = ({ product }) => {
	return (
		<Row>
			{product.map((product) => (
				<Item key={product.sku} product={product} />
			))}
		</Row>
	);
};
