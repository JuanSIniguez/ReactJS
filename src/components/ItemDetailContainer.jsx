import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import Container from "react-bootstrap/Container";

import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const refDoc = doc(db, "products", id);
		getDoc(refDoc).then((snapshot) =>
			setProduct({
				id: snapshot.id,
				...snapshot.data(),
			})
		);
	}, [id]);

	return (
		<Container>
			<ItemDetail product={product} />;
		</Container>
	);
};
