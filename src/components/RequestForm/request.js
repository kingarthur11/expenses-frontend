import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link, useNavigate , useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

const RequestForm = () => {

	const { id } = useParams();
	
	const navigate = useNavigate ();

	const token = localStorage.getItem("user-token");
	const localForm = JSON.parse(localStorage.getItem("localData"));
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const [expense, setExpense] = useState({
		title: "",
		amount: "",
		dateData: "",
		expense_type: "",
	});
	const [expenseData, setExpenseData] = useState([]);
	const expenseInfo = id ? expenseData.find((p) => p._id == id) : null;
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (id) {
			updateData();
		} else {
			await axios.post("expense/create", expense, config);
			navigate("/");
		}
	};

	const updateData = async () => {
		let {title, amount, dateData, expense_type} = expense
		await axios.put(`expense/update/${id}`, 
		{title, amount, dateData, expense_type}, config);
		navigate("/");
	};

	const handleLocalStore = (event) => {
		event.preventDefault();
		let expenseDate = expense.dateData;
  		let expenseTitle = expense.title;
		
		if(localForm === null) {
			let formData = []
			formData.push(expense);
			localStorage.setItem('localData', JSON.stringify(formData));
			return navigate("/");
		}
		let formData = [...localForm]
		formData.filter(function (item) {
			if(item.dateData == expenseDate && item.title == expenseTitle) {
				navigate("/");
			}
			formData.push(expense);
			localStorage.setItem('localData', JSON.stringify(formData));
			navigate("/");
		  });
	};

	const LocalupdateData = async () => {
		await axios.put(`expense/update/${id}`, expense, config);
		navigate("/");
	};

	const onChange = (e) => {
		setExpense({ ...expense, [e.target.name]: e.target.value });
	};

	const retrieveExpense = async () => {
		const response = await axios.get(`expense/getall`);
		setExpenseData(response.data);
	};

	useEffect(() => {
		if (expenseInfo) setExpense(expenseInfo);
	}, [expenseInfo]);

	useEffect(() => {
		retrieveExpense()
	}, []);

    return (
        <Container>
        <Contents>
            <Board>
                <h2>Staff Expenses</h2>
                <Info className="info">
                    <div>
                        <Wrap>
                            <div>
                                <Edit>
								<form onSubmit={token ? handleSubmit : handleLocalStore}>
                                        <label>Title</label>
										<input
											type="text"
											placeholder="TITLE"
											name="title"
											onChange={onChange}
											value={expense?.title}
											required
										/>
                                        <label>Expenses Type</label>
                                        <select
                                            value={expense?.expense_type}
                                            name="expense_type"
                                            onChange={onChange}
                                        >
                                            <option value="">PLEASE SELECT</option>
                                            <option value="upkeep">UPKEEP</option>
                                            <option value="food_stuff">FOOD STUFF</option>
                                            <option value="shopping">SHOPPING</option>
											<option value="transportation">TRANSPORTATION</option>
                                        </select>
										<label> Date</label>
										<input 
											type="date" 
											name="dateData" 
											placeholder="dd-mm-yyyy" 
											value={expense?.dateData}
											onChange={onChange}
											min="1997-01-01" 
											max="2023-12-31"/>
                                        <label>Amount</label>
										<input
											type="text"
											placeholder="AMOUNT"
											name="amount"
											onChange={onChange}
											value={expense?.amount}
											required
										/>
                                        <button type="submit">{id ? "UPDATE" : "CREATE"}</button>
                                    </form>
                                </Edit>
                            </div>
                        </Wrap>
                    </div>
                  
                </Info>
            </Board>
        </Contents>
    </Container>
    )
}

export default RequestForm

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media screen and (max-width: 600px) {
		padding: 0;
	}
`;

const Board = styled.div`
	background: #f0f0f7;
	height: 100vh;
	padding: 2rem 2rem 2rem 5rem;
	@media screen and (max-width: 600px) {
		padding: 2rem;
	}
	h2 {
		margin-bottom: 20px;
		font-weight: 200;
		@media screen and (max-width: 350px) {
			font-size: 18px;
		}
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	padding: 10px;
	background: #fff;
	position: relative;
	@media screen and (max-width: 860px) {
		padding-top: 4rem;
	}
	div {
		display: flex;
	}
`;

const Box = styled.div`
	width: 32%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 12px;
	font-size: 15px;
	color: #808495;
	font-weight: 100;
	.css-b62m3t-container {
		width: 100%;
	}
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
	@media screen and (max-width: 930px) {
		margin-right: 0;
	}
`;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	h3 {
		padding: 1rem;
		font-weight: 200;
	}
`;

const Edit = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	width: 100%;
	@media screen and (max-width: 1000px) {
		padding: 2rem 1rem;
	}
	
	form {
		display: flex;
		flex-direction: column;
		/* align-items: flex-end; */
		margin: 20px 5rem 0 10rem;
		@media screen and (max-width: 1000px) {
			margin: 20px 2rem 0 2rem;
		}
		@media screen and (max-width: 1000px) {
			margin: 20px 0 0 0;
		}
        label {
            position: relative;
            bottom: 10px;
            font-weight: 700px;
            font-size: 17px;
        }
		input {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 13px;
			font-size: 15px;
			color: #808495;
			font-weight: 100;
			width: 100%;
			border: 1px solid #e9e9f0;
			outline: none;
			margin-bottom: 35px;
		}
		select {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 13px;
			font-size: 15px;
			color: #808495;
			font-weight: 100;
			width: 100%;
			border: 1px solid #e9e9f0;
			outline: none;
			margin-bottom: 35px;
		}
		button {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 8px;
			font-size: 13px;
			background: #3b86ff;
			border-radius: 3px;
			color: #fff;
			width: 150px;
			margin-top: 30px;
			cursor: pointer;
			outline: none;
			border: none;
		}
	}
`;
