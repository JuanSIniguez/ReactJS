import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const refCollection = id
			? query(collection(db, "products"), where("family", "==", id))
			: collection(db, "products");

		getDocs(refCollection).then((snapshot) => {
			if (snapshot.size === 0) setProducts([]);
			else {
				setProducts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}))
				);
			}
		});
	}, [id]);

	return (
		<>
			<h2 className="h1 text-center my-4 underline">
				<u>Nuestros Productos</u>
			</h2>
			<Container fluid>
				{products.length === 0 ? (
					<Container style={{ height: "70vh" }} className="text-center">
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>{" "}
					</Container>
				) : (
					<ItemList product={products} />
				)}
			</Container>
		</>
	);
};
