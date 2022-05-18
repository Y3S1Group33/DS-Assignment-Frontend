import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const PaymentDashboard = () => {
    const [payment, setPayment] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/payments").then(res => {
            console.log(res.data)
            setPayment(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const deleteRecord=(e)=>{
        let id=e.currentTarget.value;
        axios.delete(`http://localhost:8080/payments?id=${id}`).then(alert("success")).then(window.location.href="/payments").catch(err=>{
            console.log(err)
        })

    }
    return (
        <div>
            <h1 className="text-center">Payment Dashboard</h1>
            <div className="container">
                <table className="table">
<thead>
                    <tr>
                        <th scope="col">Payment ID</th>
                        <th scope="col">Card Holders Name</th>
                        <th scope="col">Credit card Numbere</th>
                        <th scope="col">CVC</th>
                        <th scope="col">EXP Date</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>

                    </tr>
</thead>
                    {payment.map(payment => {
                        return (
                            <tbody>
                            <tr>
                                <td>{payment.id}</td>
                                <td>{payment.cardHolderName}</td>
                                <td>{payment.creditCardNumber}</td>
                                <td>{payment.cvc}</td>
                                <td>{payment.expDate}</td>

                                <td>
                                    <button onClick={deleteRecord} value={payment.id}>Delete me</button>
                                    {/*<button  className="btn btn btn-danger">*/}

                                    {/*    <Link to={`/PaymentDelete/${payment.id}`} className="btn btn-success">Delete*/}
                                    {/*    </Link>*/}
                                    {/*</button>*/}
                                </td>
                                <td>
                                    <button className="btn btn-success"  >
                                        <Link to={`/paymentUpdate/${payment.id}`} >Update
                                        </Link>
                                    </button>

                                </td>


                            </tr>
                            </tbody>
                        );
                    })}
                </table>

                <a href="/reservations">Back To Main Menu<button className="btn btn-primary"></button></a>
            </div>
        </div>
    );
};

export default PaymentDashboard;

