import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components/macro";

const Signup = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password_confirmation, setC_Password] = useState("");

	const postData = (e) => {
	    e.preventDefault()
	    axios.post(`auth/register`, {
	      password,
	      password_confirmation,
	      name,
		  email,
	    }).then(response => {
			navigate("/login");
	    }).catch(e => {
	      console.log(e);
	    });
	}

	return (
		<Container>
			<Wrapper>
				<p>Complete your registration to continue</p>
				<Form>
					<form onSubmit={postData}>
						<input
							type="text"
							placeholder="NAME"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="EMAIL"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="PASSWORD"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							type="password"
							placeholder="CONFIRM PASSWORD"
							onChange={(e) => setC_Password(e.target.value)}
						/>
						<Button
							type="submit"
							className={
								name !== "" &&
								email !== "" &&
								password !== "" &&
								password_confirmation !== ""
									? "active"
									: null
							}
						>
							CONTINUE
						</Button>
					</form>
					<div>
						Already Registered?{" "}
						<span>
							<Link to="/login" style={{ color: "#3b86ff" }}>
								Login
							</Link>
						</span>
					</div>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Signup;

//styles
const Container = styled.section`
	display: flex;
	// justify-content: center;
	// align-items: center;
	background: #caced5;
	padding: 4rem 10rem;

	@media screen and (max-width: 1200px) {
		padding: 4rem 8rem;
	}
	@media screen and (max-width: 1000px) {
		padding: 4rem 7rem;
	}

	@media screen and (max-width: 920px) {
		padding: 4rem 6rem;
	}
	@media screen and (max-width: 768px) {
		padding: 4rem 5rem;
	}
	@media screen and (max-width: 600px) {
		padding: 4rem 4rem;
	}
	@media screen and (max-width: 500px) {
		padding: 4rem 3rem;
	}

	@media screen and (max-width: 450px) {
		padding: 4rem 2rem;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	background: #fff;
	width: 100%;
	padding: 3rem 1rem;

	h2 {
		color: #2a7b12;
	}

	p {
		margin-bottom: 15px;
		font-weight: 550;
		font-size: 1.1rem;
		color: #37474f;
	}
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;

	@media screen and (max-width: 520px) {
		width: 300px;
	}

	@media screen and (max-width: 400px) {
		width: 250px;
	}

	@media screen and (max-width: 340px) {
		width: 200px;
	}

	form {
		margin-bottom: 20px;
	}

	.active {
		background-color: #01579b;
	}
	input {
		outline: none;
		border: 1px solid #a4afb7;
		background: #fff;
		padding: 10px 20px;
		width: 100%;
		margin-bottom: 15px;
	}

	//   button {
	//     display: flex;
	//     justify-content: center;
	//     align-items: center;
	//     padding: 10px 20px;
	//     width: 100%;
	//     outline: none;
	//     border: none;
	//     background: #a4c2f2;
	//     color: #fff;
	//     font-size: 12px;
	//     cursor: pointer;
	//   }

	div {
		color: #3b86ff;
		font-size: 1.1rem;
		font-weight: 400;
		text-align: left;

		span {
			cursor: pointer;
			text-decoration: underline;
			font-size: 1.1rem;
			a {
				margin-left: 0.5rem;
			}
		}
	}
`;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	width: 100%;
	outline: none;
	border: none;
	background: #a4c2f2;
	color: #fff;
	font-size: 15px;
	cursor: pointer;
`;
const Load = styled.div`
	display: ${({ loading }) => (loading ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
