import React from "react";
import {
	Nav,
	Logo,
	NavList,
	ListItem,
	StyledLink,
	Cart,
} from "./Narbar.Styles";
import { Container } from "../Context/GlobalStyles";
import logo from "../../Images/TMC-logo.png";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
	return (
		<>
			<Container>
				<Nav>
					<Logo to="/">
						<img src={logo} alt="logo" />
					</Logo>
					<NavList>
						<ListItem>
							<StyledLink to="/products">Products</StyledLink>
						</ListItem>
						<ListItem>
							<StyledLink to="/about">About</StyledLink>
						</ListItem>
						<ListItem>
							<StyledLink to="/contact">Contact</StyledLink>
						</ListItem>
					</NavList>
					<Cart to="/">
						<BsCart3></BsCart3>
					</Cart>
				</Nav>
			</Container>
		</>
	);
};

export default Navbar;
