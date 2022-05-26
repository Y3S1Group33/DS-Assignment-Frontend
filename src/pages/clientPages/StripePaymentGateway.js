import {loadStripe} from "@stripe/stripe-js";
import "../../CSS/payment.css";
import {useEffect} from "react";

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51KyGj6K0we0PU8cFfqjcNR2wb85Vh4vrJWtNESNtlgZP6qoX3zVg339EqSjiUBSCz8z2940kwo2ZbHiRwSe0s7XC00DYpEKtK8");
    }

    return stripePromise;
};

const StripePaymentGateway = () => {


    const item = {
        price: "price_1KyvdrK0we0PU8cFAHjbx8jR",
        quantity: 1
    };

    const checkoutOptions = {
        lineItems: [item],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/payment`
    };
    useEffect(async ()=>{

        const stripe =  await getStripe();
        const {error} =await stripe.redirectToCheckout(checkoutOptions);
    })

    return (
        <div className="checkout">
            <h1>Stripe Checkout</h1>


            <h1 className="checkout-price">$19</h1>

        </div>
    );
};

export default StripePaymentGateway;
