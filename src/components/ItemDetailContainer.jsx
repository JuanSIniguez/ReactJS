import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ItemDetail } from "./ItemDetail";

import data from "../data/arts.json";

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { sku } = useParams();

	useEffect(() => {
		const promise = new Promise((resolve, reject) => {
			resolve(data);
		});

		promise.then((data) => {
			setProduct(data.filter((product) => product.sku === sku));
		});
	}, [sku]);

	return (
		<Container>
			<ItemDetail product={product} />;
		</Container>
	);
};
