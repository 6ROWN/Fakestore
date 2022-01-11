import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./Components/Context/GlobalStyles";
import Home from "./Components/Home/Home";
import store from "./Components/Redux/Store";
import { Provider } from "react-redux";
import ProductList from "./Components/Products/ProductList";
import ProductDetails from "./Components/Products/ProductDetails";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<GlobalStyle />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<ProductList />} />
						<Route
							path="/products/:id"
							element={<ProductDetails />}
						/>
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</Provider>
	);
}

export default App;
