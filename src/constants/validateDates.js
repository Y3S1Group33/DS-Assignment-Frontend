import { useState } from "react";
import axios from "axios";

export default function ValidateDates(date){
    
    const [Reservations, setReservations] = useState([]);
    console.log("inside validate date")
    axios
    .get("http://localhost:8080/reservations")
    .then(function (response) {
        setReservations(response)
    });

    for(let i=0; i<=Reservations.length;i++){
      if(Reservations[i].date == date){
        return false;
      }
      else{
        return true;
      }
    }
  };