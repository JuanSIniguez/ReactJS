import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/cartContext";
import { NavBar } from "./components/NavBar";
import { MainCarrousel } from "./components/MainCarrousel";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";

export default function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						rel="noreferrer"
						element={
							<>
								<MainCarrousel />
							</>
						}
					/>
					<Route
						path="/product/"
						rel="noreferrer"
						element={
							<>
								<ItemListContainer greetings="" />
							</>
						}
					/>
					<Route
						path="/product/:id"
						rel="noreferrer"
						element={<ItemDetailContainer greetings="" />}
					/>
					<Route
						path="/category/:id"
						rel="noreferrer"
						element={<ItemListContainer greetings="" />}
					/>
					<Route
						path="/cart/"
						rel="noreferrer"
						element={<Cart greetings="" />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</CartProvider>
	);
}
