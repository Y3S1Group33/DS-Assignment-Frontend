import React from 'react';
import "../../../CSS/payment.css"
const PaymentDelete = () => {
    return (
        <div>

            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading text-center">Payments Form</h2>
                    <input type="text" className="form-control" placeholder="Card Holder Name" required=""
                           autoFocus=""/>
                    <input type="text" className="form-control" placeholder="Credit Card Number" required=""
                           autoFocus=""/>
                    <input type="text" className="form-control" placeholder="CVC" required=""
                           autoFocus=""/><input type="text" className="form-control" placeholder="Card Holder Name" required=""
                                                autoFocus=""/>

                    <input type="text" className="form-control" placeholder="Exp Date" required=""/>

                    <button className="btn btn-lg btn-dark btn-block btn-submit" type="submit">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default PaymentDelete;