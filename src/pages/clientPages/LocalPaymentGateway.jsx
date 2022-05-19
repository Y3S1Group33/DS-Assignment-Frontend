import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import "../../CSS/payment.css";
import axios from "axios";
const LocalPaymentGateway = () => {
    const form = useRef();

    const[email,updateEmail]=useState("")
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

        emailjs.sendForm('service_js8nvc9', 'template_yabaem9', form.current, '1asUfQ-WtKRiuysnb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.location.href="/reservations"
    }

    return (

        <div>
            <div className="wrapper">
                <form ref={form} className="form-signin">
                    <h2 className="form-signin-heading text-center">Payments Form</h2>
                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={(e)=>{
                        updateEmail(e.target.value)
                    }} required=""
                           autoFocus=""/>
                    <input type="text" name="cardHolderName" className="form-control" placeholder="Card Holder Name" onChange={(e)=>{
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