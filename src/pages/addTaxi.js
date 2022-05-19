import React from 'react'
import axios from 'axios';
import { useState } from "react";

function TaxiReservations() {

    const [taxiId, setdriverTaxiId] = useState("");
    const [driverName, setdriverName] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [reservationId, setreservationId] = useState("");
    const [contactNumber, setcontactNumber] = useState("");

  let data = {
    taxiId:taxiId,
    driverName: driverName,
    vehicleType: vehicleType,
    reservationId: reservationId,
    contactNumber: contactNumber,
  };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.post("http://localhost:8080/taxi", data);
          if (res) {
            console.log(data);
            alert("Taxi Reservation created successfully");
            window.location.href="/paymentOption" 
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="container">
           <h1 className="text-center">Add Taxi Reservation</h1>

           <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label >Taxi Id</label>
          <input
            type="text"
            className="form-control"
            id="taxiId"
            value={taxiId}
            onChange={(e) => setdriverTaxiId(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Driver Name</label>
          <input
            placeholder=""
            type="text"
            className="form-control"
            id="driverName"
            value={driverName}
            onChange={(e) => setdriverName(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Vehicle Type</label>
          <input
            className="form-control"
            id="vehicleType"
            rows="3"
            value={vehicleType}
            onChange={(e) => setvehicleType(e.target.value)}
            required/>
        </div>

        <div className="form-group">
          <label >Reservation ID</label>
          <input
            className="form-control"
            id="reservationId"
            rows="3"
            value={reservationId}
            onChange={(e) => setreservationId(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Contact Number</label>
          <input
            className="form-control"
            id="contactNumber"
            rows="3"
            value={contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
            required />
        </div>

        
      <br></br>
               <button type="submit" className="btn btn-primary">Add Taxi Reservation</button>

      </form>
      <br></br><br></br>
      <a href=""><button className="btn btn-primary">Back to Home</button></a>
        </div>
    )
}

export default TaxiReservations