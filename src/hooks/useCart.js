import { useState } from "react";

export const useCart = () => {
	const [productsInCart, setProductsInCart] = useState([]);

	const totalInCart = () => {
		const totalProductsInCart = productsInCart.reduce(
			(acumulador, valorActual) => acumulador + valorActual.cant,
			0
		);
		const totalOrderInCart = productsInCart.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.cant * valorActual.regular_price,
			0
		);
		return { totalProductsInCart, totalOrderInCart };
	};

	const addProduct = (product, cant) => {
		const { ...rest } = product;
		const isInCart = productsInCart.some(
			(product) => product.sku === rest.sku
		);
		if (!isInCart) setProductsInCart((prev) => [...prev, { ...rest, cant }]);
		else {
			const addProduct = productsInCart.map((product) => {
				const availablestock = product.stock >= product.cant + cant;

				if (product.sku === rest.sku)
					if (availablestock)
						return {
							...product,
							cant: product.cant + cant,
						};
					else
						return {
							...product,
							cant: product.stock,
						};
				else return product;
			});
			setProductsInCart(addProduct);
		}
	};

	const deleteProduct = (sku) => {
		const deletedProducts = productsInCart.filter(
			(product) => product.sku !== sku
		);
		setProductsInCart(deletedProducts);
	};

	const clearCart = () => setProductsInCart([]);

	return { productsInCart, addProduct, deleteProduct, totalInCart, clearCart };
};
