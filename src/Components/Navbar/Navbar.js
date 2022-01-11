import React from "react";
import { Nav, Logo, NavList, ListItem, StyledLink } from "./Narbar.Styles";
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
					<StyledLink to="/">
						<BsCart3
							style={{ fontSize: "25px", margin: "0 1rem" }}
						></BsCart3>
					</StyledLink>
				</Nav>
			</Container>
		</>
	);
};

export default Navbar;
