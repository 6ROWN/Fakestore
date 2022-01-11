import axios from "axios";
import {
	FETCH_PRODUCT_REQUEST,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE,
} from "./ProductTypes";

const fetchRequest = () => {
	return {
		type: FETCH_PRODUCT_REQUEST,
	};
};

const fetchSuccess = (products) => {
	return {
		type: FETCH_PRODUCT_SUCCESS,
		payload: products,
	};
};

const fetchFailure = (error) => {
	return {
		type: FETCH_PRODUCT_FAILURE,
		payload: error,
	};
};

export const getProducts = () => {
	return (dispatch) => {
		dispatch(fetchRequest);
		axios
			.get("https://fakestoreapi.com/products/")
			.then((response) => {
				const data = response.data;
				dispatch(fetchSuccess(data));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchFailure(errorMsg));
			});
	};
};
