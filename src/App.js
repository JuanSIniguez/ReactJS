import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<ItemListContainer greetings="HolaMund" />}
				/>
				<Route
					path="/category/:id"
					element={<ItemListContainer greetings="HolaMund" />}
				/>
				<Route
					path="/product/:sku"
					element={<ItemDetailContainer greetings="HolaMund" />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
