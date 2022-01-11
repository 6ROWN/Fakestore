import React, { useEffect } from "react";
import { getProducts } from "../Redux/Products/ProductAction";
import { connect } from "react-redux";
import ProductsCard from "./ProductsCard";
import Error from "../Layout/Error";
import Loading from "../Layout/Loading";

const ProductList = ({ getProducts, data }) => {
	useEffect(() => {
		getProducts();
	}, [getProducts]);
	return (
		<div>
			{data.loading ? (
				<Loading />
			) : data.error ? (
				<Error />
			) : (
				<div style={{ margin: "3rem 0" }}>
					<h3 style={{ paddingBottom: "2rem" }}> Latest Products</h3>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
							gap: "2.5rem",
							padding: "1rem",
						}}
					>
						{data &&
							data.products.map((product) => (
								<ProductsCard
									product={product}
									key={product.id}
								/>
							))}
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		data: state.products,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProducts: () => dispatch(getProducts()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
