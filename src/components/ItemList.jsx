import { Item } from "./Item";
import Row from "react-bootstrap/esm/Row";

export const ItemList = ({ product }) => {
	return (
		<Row style={{ width: "100%" }}>
			{product.map((product) => (
				<Item key={product.id} product={product} />
			))}
		</Row>
	);
};
