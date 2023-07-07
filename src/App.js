import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { MainCarrousel } from "./components/MainCarrousel";

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route
					path="/"
					rel="noreferrer"
					element={
						<>
							<MainCarrousel />
							<ItemListContainer greetings="" />
						</>
					}
				/>
				<Route
					path="/category/:id"
					rel="noreferrer"
					element={<ItemListContainer greetings="" />}
				/>
				<Route
					path="/product/:sku"
					rel="noreferrer"
					element={<ItemDetailContainer greetings="" />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
