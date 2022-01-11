import React from "react";
import styled from "styled-components";
import { Container } from "../Context/GlobalStyles";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<footer>
					<FooterLink to="">
						<p> The Marathon Store &copy; 2021</p>
					</FooterLink>
				</footer>
			</Container>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	background: #4a4a4a;
	padding: 1.5rem 0;
`;

const FooterLink = styled(Link)`
	text-decoration: none;

	p {
		color: #fff;
		text-decoration: none;
	}
`;

export default Footer;
