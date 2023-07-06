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
					rel="noreferrer"
					element={<ItemListContainer greetings="HolaMund" />}
				/>
				<Route
					path="/category/:id"
					rel="noreferrer"
					element={<ItemListContainer greetings="HolaMund" />}
				/>
				<Route
					path="/product/:sku"
					rel="noreferrer"
					element={<ItemDetailContainer greetings="HolaMund" />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
