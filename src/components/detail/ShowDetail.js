import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { ReactComponent as Edit } from "../../asset/icons/edit.svg";
import { ReactComponent as Delete } from "../../asset/icons/delete.svg";

const ShowDetail = () => {

    const [formData, setFormData] = useState([]);
	const token = localStorage.getItem("user-token");
    const localForm = JSON.parse(localStorage.getItem("localData"));
    
    
    

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	const retrieveExpenses = () => {
		axios
			.get(`expense/getall`)
			.then((response) => {
				setFormData(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

    const onDelete = (id) => {
		axios.delete(`expense/delete/${id}`, config).then(() => {
			retrieveExpenses();
		});
	};

    const localDelete = (dateData, title) => {
		
        // console.log(localInfo === null)
        if(localForm === null) {
			return {};
		}
        let localInfo = [...localForm]
		localInfo.filter(function (item) {
            return item.dateData !== dateData && item.title !== title
		  });
        formData.push(localInfo);
        localStorage.setItem('localData', JSON.stringify(formData));
	};

    // for (let i = 0; i < localForm.length; i++) {
    //     console.log(localForm[i])
    //     // await axios.post("expense/create", item, config);
    //     // formData.push(item);
    // } 

    const handleLocalSubmit = async () => {
        if(localForm === null) {
			return {};
		}
        for (let i = 0; i < localForm.length; i++) {
            await axios.post("expense/create", localForm[i], config);
            // formData.push(item);
        } 
    };
     
	useEffect(() => {
		retrieveExpenses();
	}, []);

    useEffect(() => {
		if (token) {
			handleLocalSubmit()
			localStorage.removeItem("localData");
            retrieveExpenses();
		}
	}, [token, localForm]);

    return (
        <Container> 
            <div>
                <MainBody>
                    <div className='main-content'>
                        <SearchBar>
                            <label>
                                <input type="checkbox"/> Select All 
                            </label>
                            <i className="far fa-trash"> </i>
                        </SearchBar>
						<Button to="/expense-form">Create</Button>
                        <Response>
                        <Table>
                                <tr>
                                    <th>#</th>
                                    <th>TITLE</th>
                                    <th>DATE</th>
                                    <th>AMOUNT</th>
                                    <th>EXPENSES TYPE</th>
                                    <th>ACTION</th>
                                </tr>

                                {formData && 
                                    formData.map((data, index) => {
                                    return (
                                        <tr key={data._id}>
                                            <td>{index+1}</td>
                                            <td>{data.title}</td>
                                            <td>{data.dateData}</td>
                                            <td>{data.amount}</td>
                                            <td>{data.expense_type}</td>
                                            <td>
                                                <button style={{ marginRight: "10px" }}>
                                                    {" "}
                                                    <Edit />{" "}
                                                </button>{" "}
                                                <button 
                                                    onClick={() => token ? onDelete(data._id) : localDelete(data.dateData, data.title)}>
                                                    <Delete />{" "}
                                                </button>
                                            </td>
                                            {/* <td>
                                                <Link to={`/admin-dashboard/edit/${data.id}`}>
                                                    <button onClick={showEdit} style={{ marginRight: "10px" }}>
                                                        {" "}
                                                        <Edit userid={data.id} />{" "}
                                                    </button>{" "}
                                                </Link>
                                                <button onClick={() => onDelete(data.id)}>
                                                    <Delete />{" "}
                                                </button>
                                            </td> */}
                                        </tr>
                                    );
                                })}
                                
                            </Table>
                        </Response>
                    </div>
                </MainBody>
            </div>
            
        </Container>
    )
}

export default ShowDetail

const Container = styled.div`
    width: 100%;
`

const Table = styled.table`
	border-collapse: collapse;
	/* margin-bottom: 15px; */
	width: 100%;

	@media screen and (max-width: 1300px) {
		width: 900px;
	}

	th {
		background: #e9e9f0;
		color: #808495;
		padding: 8px;
		font-weight: 400;
		font-size: 14px;
		border: none;
	}

	td {
		padding: 13px;
		color: #43425d;
		text-align: center;
		font-size: 13px;
		border-bottom: 1px solid #e9e9f0;

		button {
			outline: none;
			border: none;
			background: transparent;
			cursor: pointer;
		}
	}
`;


const MainBody = styled.div`
    background: rgba(249,249,249,1);
    width: 100%;
    
    .main-content {
        padding-top: 3rem;
        padding-left: 3rem;
        padding-right: 9rem;
        padding-bottom: 4rem;
    }
     
    h3 {
        white-space: nowrap;
        text-align: left;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: rgba(44,44,44,1);
    }
`

const SearchBar = styled.div`
    padding: 1.2rem 3rem;
    background: rgba(255,255,255,1);
    align-items: center;
    justify-content: space-between;
    display: flex;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 9px;

    h3 {
        text-align: left;
        font-family: Montserrat;
        font-style: normal;
        font-weight: lighter;
        font-size: 22px;
        color: rgba(153,153,153,1);
    }
    i {
        color: 
    }
`

const Response = styled.div`
    margin-top: 3rem;
    padding: 2rem 2rem;
    align-items: center;
    justify-content: space-around;
    display: flex;
    background: rgba(255,255,255,1);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media screen and (max-width: 1300px) {
		width: 900px;
	}
    
    img {
        width: 200px;
        height: 200px;
        padding-right: 30px;
    }
`
const Button = styled(Link)`
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
    text-decoration: none;
	@media screen and (max-width: 860px) {
		margin-right: 0;
	}
`;