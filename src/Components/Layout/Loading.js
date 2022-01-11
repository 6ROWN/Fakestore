import React from "react";
import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
	return (
		<LoadingDiv>
			<AiOutlineLoading
				style={{
					animation: "rotate 1s linear infinite",
					fontSize: "4rem",
				}}
			/>
		</LoadingDiv>
	);
};

const LoadingDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 81vh;
`;

export default Loading;
