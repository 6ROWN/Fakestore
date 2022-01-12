import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
	overflow-x: hidden;
`;

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 3rem;
	padding-top: 1rem;
`;

export const Logo = styled(Link)`
	width: 150px;
	height: 60px;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		width: 80px;
		height: 40px;
	}
`;

export const NavList = styled.ul`
	display: flex;
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 0 15px;
`;

export const StyledLink = styled(Link)`
	font-size: 16px;
	color: #333;
	text-decoration: none;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Cart = styled(Link)`
	font-size: 22px;
	color: #333;
`;
