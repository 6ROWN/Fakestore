import React from "react";
import styled from "styled-components";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
	return (
		<Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
			<Card>
				<div>
					<img src={product.image} alt={product.title} />
				</div>
				<h4>{product.title}</h4>
				<p>
					<BsCurrencyDollar /> {product.price.toFixed(2)}
				</p>
				<span>{product.category}</span>
			</Card>
		</Link>
	);
};

const Card = styled.div`
	border: 1px solid #555;
	width: 400px;
	border-radius: 8px;
	padding: 1rem;
	color: #333;

	div {
		width: 250px;
		height: 250px;
		margin: auto;
		img {
			width: 100%;
			height: 100%;
		}
	}
	h4 {
		padding-top: 1rem;
		font-size: 15px;
		font-weight: bold;
	}

	p {
		font-weight: bold;
	}
	span {
		color: #666;
		font-size: 14px;
	}
`;

export default ProductsCard;
