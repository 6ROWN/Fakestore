import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div``;

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 3rem;
	padding: 1rem 0;
`;

export const Logo = styled(Link)`
	width: 150px;
	height: 60px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const NavList = styled.ul`
	display: flex;
`;

export const ListItem = styled.li`
	list-style: none;
	padding: 0 20px;
`;

export const StyledLink = styled(Link)`
	font-size: 16px;
	color: #333;
	text-decoration: none;
`;
