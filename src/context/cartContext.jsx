import { createContext } from "react";
import { useCart } from "../hooks/useCart";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	//Logica del carrito en finalCart.js
	const cart = useCart();
	//al agregar al provider acá evitamos contaminar app.js con la lógica
	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
