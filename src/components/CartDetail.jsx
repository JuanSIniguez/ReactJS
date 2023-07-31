import { useState } from "react";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const CartDetail = ({ product, deleteProduct, totalInCart }) => {
	const [quantity, setQuantity] = useState(product.cant);
	const totalPrice = () => product.cant * product.regular_price;

	return (
		<tr className="align-middle h6">
			<td className="text-center">
				<Image
					src={product.img}
					alt={product.name}
					style={{ height: "8rem" }}
				/>
			</td>
			<td className="text-start ">
				{product.sku} - {product.name}
			</td>
			<td className="text-center ">{quantity}</td>
			<td className="text-center ">{product.regular_price}</td>
			<td className="text-center "> {totalPrice()}</td>
			<td className="text-center ">
				<Button
					variant="outline-danger"
					onClick={() => deleteProduct(product.sku)}
				>
					Eliminar
				</Button>
			</td>
		</tr>
	);
};
