import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components/macro";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate ();

	const handleSubmit = (e) => {
	    e.preventDefault()
	    axios.post(`auth/login`, {
	      password,
	      email,
	    }).then(response => {
	      let { token } = response.data.tokens;
	      localStorage.setItem('user-token', token)
	      navigate("/");
	    }).catch(e => {
	      console.log(e);
	    });
	}

	return (
		<Container>
			<Wrapper>
				<p>Login to continue</p>

				<Form>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<input
							type="password"
							placeholder="PASSWORD"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<Button
							type="submit"
							className={
								email !== "" && password !== "" ? "active" : null
							}
						>
							LOGIN
						</Button>
					</form>
					<div>
						Don't have an account?{" "}
						<span>
							<Link to="/signup" style={{ color: "#3b86ff" }}>
								Register
							</Link>
						</span>
					</div>

				</Form>
			</Wrapper>

		</Container>
	);
};

export default Login;

//styles
const Container = styled.section`
	display: flex;
	
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
	position: relative;

	@media screen and (max-width: 520px) {
		width: 300px;
	}

	@media screen and (max-width: 400px) {
		width: 250px;
	}

	@media screen and (max-width: 340px) {
		width: 200px;
	}
	.active {
		background-color: #01579b;
	}
	form {
		margin-bottom: 20px;
	}

	input {
		outline: none;
		border: 1px solid #a4afb7;
		background: #fff;
		padding: 10px 20px;
		width: 100%;
		margin-bottom: 15px;
		font-size: 15px;
	}

	button {
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
	}

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
	@media only screen and (max-width: 480px) {
		div {
			font-size: 1rem;
			span {
				font-size: 1rem;
				a {
					margin-left: 0;
				}
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
	font-size: 12px;
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
