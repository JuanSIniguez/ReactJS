import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { ItemList } from "./ItemList";

import data from "../data/arts.json";

export const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const promise = new Promise((resolve, reject) => {
			resolve(data);
		});

		promise.then((data) => {
			if (id) {
				setProducts(data.filter((product) => product.familia === id));
			} else {
				setProducts(data);
			}
		});
	}, [id]);

	return (
		<Container className="d-flex flex-wrap mt-4">
			{products.length === 0 ? (
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			) : (
				<ItemList product={products} />
			)}
		</Container>
	);
};
