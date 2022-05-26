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
        axios.get(`http://localhost:8080/payments/getById?id=${params.id}`).then(res=>{
            console.log(res.data)
            setPayment(res.data)
            alert("RECORD UPDATED")
        })
    }, []);

    const requestBody={
        cardHolderName:holderName,
        creditCardNumber:cardNumber,
        cvc:cvc,
        expDate:expDate
    }


    const updateRecord=(e)=>{
        e.preventDefault()

        axios.put(`http://localhost:8080/payments?id=${params.id}`,requestBody).then(res=>{
            console.log("post data on update"+res.data)
            window.location.href="/payments"
            //setCardHolderName(res.data.cardHolderName)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>

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
                                    <button onClick={updateRecord} className="btn btn-lg btn-dark btn-block btn-submit">Update Record</button>
                                </form>
                            </div>


                        </div>

        </div>
    );
};

export default UpdatePayment;