import axios from "axios";
import {
	FETCH_SUCCESS,
	FETCH_FAILURE,
	FETCH_REQUEST,
} from "./ProductDetailsType";

const fetchRequest = () => {
	return {
		type: FETCH_REQUEST,
	};
};

const fetchSuccess = (productDetails) => {
	return {
		type: FETCH_SUCCESS,
		payload: productDetails,
	};
};

const fetchFailure = (error) => {
	return {
		type: FETCH_FAILURE,
		payload: error,
	};
};

export const selectedProduct = (id) => {
	return (dispatch) => {
		dispatch(fetchRequest);
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
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
