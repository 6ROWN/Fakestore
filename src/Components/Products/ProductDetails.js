import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../Redux/ProductDetails/ProductDetailsAction";
import Product from "./Product";

const ProductDetails = () => {
	const productDetail = useSelector((state) => state.productDetails);
	const dispatch = useDispatch();

	const { id } = useParams();

	useEffect(() => {
		if (id && id !== "") {
			dispatch(selectedProduct(id));
		}
	}, [id, dispatch]);

	return (
		<div>
			<Product product={productDetail.productDetails} />
		</div>
	);
};

export default ProductDetails;
