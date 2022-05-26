import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import paymentBackground from "../../../images/paymentBackground.png";

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
    const deleteRecord=async (e)=>{
        let id=e.currentTarget.value;
       await swal("Record Deleted successfully","press ok to continue","success")
        axios.delete(`http://localhost:8080/payments?id=${id}`).then(window.location.href="/payments").catch(err=>{
            console.log(err)
        })
    }
    return (
        <div style={{
            backgroundImage:`url(${paymentBackground})`,backgroundPositionY:"bottom"}}>
            <h1 className="text-center" style={{
                color:"white"}}>Payment Dashboard</h1>
            <div className="container">
                <table className="table">
<thead>
                    <tr>
                        <th style={{
                            color:"white"}} scope="col">Payment ID</th>
                        <th style={{
                            color:"white"}} scope="col">Card Holders Name</th>
                        <th style={{
                            color:"white"}} scope="col">Credit card Numbere</th>
                        <th style={{
                            color:"white"}} scope="col">CVC</th>
                        <th style={{
                            color:"white"}} scope="col">EXP Date</th>
                        <th style={{
                            color:"white"}} scope="col">Delete</th>
                        <th style={{
                            color:"white"}} scope="col">Update</th>

                    </tr>
</thead>
                    {payment.map(payment => {
                        return (
                            <tbody>
                            <tr style={{
                                color:"white"}}>
                                <td>{payment.id}</td>
                                <td>{payment.cardHolderName}</td>
                                <td>{payment.creditCardNumber}</td>
                                <td>{payment.cvc}</td>
                                <td>{payment.expDate}</td>

                                <td>
                                    <button className="btn btn-danger" onClick={deleteRecord} value={payment.id}>Delete</button>

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

                <a href="/admin"><button className="btn btn-primary">Back To Main Menu</button></a>
            </div>
        </div>
    );
};

export default PaymentDashboard;

