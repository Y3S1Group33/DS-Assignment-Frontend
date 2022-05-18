import React, {useState} from 'react';
import "../../CSS/payment.css";
import axios from "axios";
const LocalPaymentGateway = () => {
    const[holderName,updateHolderName]=useState("")
    const[cardNumber,updateCardNumber]=useState("")
    const[cvc,updateCvc]=useState("")
    const[expDate,updateExpDate]=useState("")

    const requestBody={
        cardHolderName:holderName,
        creditCardNumber:cardNumber,
        cvc:cvc,
        expDate:expDate
    }

    const SetPayments=(e)=>{
        e.preventDefault()


        axios.post("http://localhost:8080/payments",requestBody).then(res=>{
            console.log(res.data)
            //setCardHolderName(res.data.cardHolderName)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (

        <div>
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading text-center">Payments Form</h2>
                    <input type="text" className="form-control" placeholder="Card Holder Name" onChange={(e)=>{
                        updateHolderName(e.target.value)
                    }} required=""
                           autoFocus=""/>
                    <input type="text" className="form-control" placeholder="Credit Card Number" onChange={(e)=>{
                        updateCardNumber(e.target.value)
                    }} required=""
                           autoFocus=""/>
                    <input type="text" className="form-control" placeholder="CVC" onChange={(e)=>{
                        updateCvc(e.target.value)
                    }} required=""
                           autoFocus=""/>

                    <input type="text" className="form-control" placeholder="Exp Date" onChange={(e)=>{
                        updateExpDate(e.target.value)
                    }} required=""/>

                    <button className="btn btn-lg btn-dark btn-block btn-submit" onClick={SetPayments} type="submit">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default LocalPaymentGateway;