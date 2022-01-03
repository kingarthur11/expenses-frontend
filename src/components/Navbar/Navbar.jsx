import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components/macro";

const Navbar = () => {
	const [isopen, setisopen] = useState(false);

	const navigate = useNavigate ();

	const user = localStorage.getItem("user-token");

	const logOut = () => {
		localStorage.removeItem("user-token");
		navigate("/login");
	};

	return (
		<>
			<Nav>
				<NavChild>
					<NavMenu>
					<Button
						to="/"
						style={{ background: "#3B86FF", marginRight: "20px" }}
					>
						Home
					</Button>
					{user ? (
						<>
							<Button
								onClick={logOut}
								to="/login"
								style={{ background: "#3B86FF", marginRight: "20px" }}
							>
								Logout
							</Button>
						</>
					) : (
						<>
							<Button
								to="/login"
								style={{ background: "#3B86FF", marginRight: "20px" }}
							>
								Login
							</Button>
							<Button
								to="/signup"
								style={{ background: "#3B86FF", marginRight: "20px" }}
							>
								Signup
							</Button>
						</>
					) }	
					</NavMenu>
				</NavChild>
			</Nav>
		</>
	);
};

export default Navbar;

const Nav = styled.section`
	height: 5rem;
	width: 100%;
	/* padding: 0 10rem 2rem; */
	background: #fff;
	z-index: 100;
	@media screen and (max-width: 1200px) {
		padding: 0 8rem;
	}
	@media screen and (max-width: 1000px) {
		padding: 0 7rem;
	}

	@media screen and (max-width: 920px) {
		padding: 0 6rem;
	}
	@media screen and (max-width: 768px) {
		padding: 0 5rem;
	}
	@media screen and (max-width: 600px) {
		padding: 0 4rem;
	}
	@media screen and (max-width: 500px) {
		padding: 0 3rem;
	}

	@media screen and (max-width: 450px) {
		padding: 0 2rem;
	}
	@media screen and (max-width: 768px) {
		height: 5rem;
	}
`;

const NavChild = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavMenu = styled.div`
	position: relative;
	left: 4rem;
	display: flex;
	align-items: center;
	padding-top: 25px;

	p {
		padding-right: 12px;
	}

	@media screen and (max-width: 768px) {
		display: flex;
	}
`;

const Button = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 15px;
	font-weight: 800;
	color: #fff;
    text-decoration: none;

	@media screen and (max-width: 768px) {
		padding: 8px 12px;
	}
`;