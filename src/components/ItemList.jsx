import { Item } from "./Item";

export const ItemList = ({ product }) => {
	return product.map((product) => (
		<Item key={product.sku} product={product} />
	));
};
