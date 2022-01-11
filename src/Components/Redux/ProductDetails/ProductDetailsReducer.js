import {
	FETCH_REQUEST,
	FETCH_FAILURE,
	FETCH_SUCCESS,
} from "./ProductDetailsType";

const initialState = {
	loading: false,
	productDetails: [],
	error: "",
};

const productDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_SUCCESS:
			return {
				loading: false,
				productDetails: action.payload,
				error: "",
			};
		case FETCH_FAILURE:
			return {
				loading: false,
				productDetails: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default productDetailsReducer;
