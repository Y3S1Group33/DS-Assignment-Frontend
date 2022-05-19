import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import stripePay from "../../images/stripePay.svg"
import hmsPay from "../../images/hmsPay.svg"
import {Link} from "react-router-dom";
const useStyles = makeStyles({
    logo: {
        marginTop: "100px",
        paddingLeft: "100px",
    },
    option: {
        "&:hover": {
            background: "#D9FAFF",
        },
    },
    stripe:{
        textAlign:"center"
    }
});
const PaymentOptions = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className="text-center jumbotron">please select a Payment option</h2>
            <Grid container justifyContent={"center"} className={classes.logo}>
                <Grid item xs={12} md={6} className={classes.stripe} >
                <Link to={`/payments/stripe`}>
                    <img
                        src={stripePay}
                        alt="60"
                        className={classes.option}
                        //onClick={() => history.push("/payments/info")}
                    />
                </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to={`/payments/local`} >

                    <img
                        src={hmsPay}
                        alt="60"
                        className={classes.option}
                        //onClick={() => history.push("/payments/mobileqr")}
                    />
                    </Link>
                </Grid>

            </Grid>
        </div>
    );
};

export default PaymentOptions;