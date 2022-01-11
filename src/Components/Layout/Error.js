import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<ErrorDiv>
			<div>
				Problem loading data. Check internet connection and retry
				<ErrorLink to="/products"> Retry </ErrorLink>
			</div>
		</ErrorDiv>
	);
};

const ErrorDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 81vh;

	div {
		font-size: 20px;
		color: red;
		padding: 0 1.5rem;
	}
`;

const ErrorLink = styled(Link)`
	display: block;
	width: 150px;
	margin: 20px auto;
	text-decoration: none;
	padding: 7px 10px;
	color: blue;
	border-radius: 5px;
	outline: none;
	border: 1px solid blue;
`;

export default Error;
