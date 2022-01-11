import { combineReducers } from "redux";
import productReducer from "./Products/ProductReducer";
import productDetailsReducer from "./ProductDetails/ProductDetailsReducer";

const rootReducer = combineReducers({
	products: productReducer,
	productDetails: productDetailsReducer,
});

export default rootReducer;
