import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";



const UpdatePayment = () => {
    const params=useParams()
    const [payment, setPayment] = useState([]);
    const[holderName,updateHolderName]=useState("")
    const[cardNumber,updateCardNumber]=useState("")
    const[cvc,updateCvc]=useState("")
    const[expDate,updateExpDate]=useState("")
    useEffect(() => {
        axios.get(`http://localhost:8080/payments/?id=${params.id}`).then(res => {
            console.log(res.data)
            setPayment(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    const cardHolderName=(e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            {
                payment.map(payment=>{
                    return(
                        <div >
                            <div className="wrapper">
                                <form className="form-signin">
                                    <h2 className="form-signin-heading text-center">Payments Update Form</h2>
                                    <input type="text"  className="form-control" placeholder={payment.cardHolderName} onChange={(e)=>{
                                        updateHolderName(e.target.value)
                                    }} required=""
                                           autoFocus=""/>
                                    <input type="text" className="form-control" placeholder={payment.creditCardNumber} onChange={(e)=>{
                                        updateCardNumber(e.target.value)
                                    }} required=""
                                           autoFocus=""/>
                                    <input type="text" className="form-control" placeholder={payment.cvc} onChange={(e)=>{
                                        updateCvc(e.target.value)
                                    }} required=""
                                           autoFocus=""/>

                                    <input type="text" className="form-control" placeholder={payment.expDate} onChange={(e)=>{
                                        updateExpDate(e.target.value)
                                    }} required=""/>
                                    <button className="btn btn-lg btn-dark btn-block btn-submit">Update Record</button>
                                </form>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    );
};

export default UpdatePayment;