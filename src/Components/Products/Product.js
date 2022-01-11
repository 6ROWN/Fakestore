import React, { useState } from "react";
import { Container } from "../Context/GlobalStyles";
import styled from "styled-components";
import Rating from "../Layout/Rating";

const Product = ({ product }) => {
	const {
		image,
		title,
		description,
		price,
		rating: { rate, count } = { rate: "1", count: "1" },
	} = product;

	const [quantity, setQuantity] = useState(1);

	const decrement = () => {
		setQuantity((prevState) => prevState - 1);
	};

	const increment = () => {
		setQuantity((prevState) => prevState + 1);
	};

	return (
		<Container>
			<GridWrapper>
				<ImageContainer>
					<div>
						<img src={image} alt="" />
					</div>
				</ImageContainer>
				<ProductDetails>
					<h2>{title}</h2>
					<Flexbox>
						<h5>$ {price}</h5>
						<h6>
							<span>
								{count}k <i> Ratings</i>.
							</span>
							<span>
								<Rating rate={rate} />
							</span>
						</h6>
					</Flexbox>

					<Description>
						<h5>Description</h5>

						{description}
					</Description>

					<Quantity>
						<button onClick={increment}>+</button>
						<span>{quantity}</span>
						<button onClick={decrement}>-</button>
					</Quantity>

					<Button>Add to cart</Button>
				</ProductDetails>
			</GridWrapper>
		</Container>
	);
};

export default Product;

const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	height: 100vh;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ImageContainer = styled.div`
	width: 100%;

	div {
		height: 70vh;
		width: 100%;

		@media screen and (max-width: 768px) {
			height: 30vh;
			width: 70%;
			margin: auto;
		}

		img {
			height: 100%;
			width: 100%;
		}
	}
`;
const ProductDetails = styled.div`
	padding: 2.5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-evenly;
`;
const Flexbox = styled.div`
	display: flex;
	justify-content: space-between;

	span {
		display: block;
		padding: 0.3rem 0;
	}
`;
const Description = styled.div`
	font-size: 1rem;
	line-height: 2rem;
	text-align: left;

	span {
		display: flex;
		justify-content: space-evenly;
	}

	h5 {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const Quantity = styled.div`
	padding: 0.5rem 0;
	button {
		width: 50px;
		outline: none;
		border: none;
		padding: 0.5rem;
		border-radius: 8px;
		font-weight: 600;
	}

	span {
		padding: 2rem;
	}
`;

const Button = styled.div`
	background: red;
	padding: 10px;
	font-weight: 500;
	cursor: pointer;
	border-radius: 8px;
`;
