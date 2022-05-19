import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateTaxi() {
  const params = useParams();
  const [Taxi, setTaxi] = useState("");
  const [driverName, setdriverName] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [reservationId, setreservationId] = useState("");
  const [contactNumber, setcontactNumber] = useState("");

  let data = {
    taxiId: params.id,
    driverName: driverName,
    vehicleType: vehicleType,
    reservationId: reservationId,
    contactNumber: contactNumber,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `http://localhost:8080/taxi?id=${params.id}`,
        data
      );
      if (res) {
        console.log(data);
        alert("Taxi Reservation updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/taxi/getById?id=${params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setTaxi(responseData);
      });
    console.log(Taxi);
  }, []);

  const onDelete = () => {
    if (window.confirm("Do you want to delete this")) {
      axios
        .delete(`http://localhost:8080/taxi?id=${params.id}`)
        .then((res) => {
          alert("Deleted successfuly");
          window.location.href = "/adminTaxi";
        });
    } else {
      alert("Record not deleted");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Update Taxi Reservation</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Taxi ID</label>
          <input
            type="text"
            className="form-control"
            id="taxiId"
            value={Taxi.taxiId}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Driver Name</label>
          <input
            type="text"
            className="form-control"
            id="driverName"
            placeholder={Taxi.driverName}
            onChange={(e) => setdriverName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Vehicle Type</label>
          <input
            className="form-control"
            id="vehicleType"
            rows="3"
            placeholder={Taxi.vehicleType}
            onChange={(e) => setvehicleType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Reservation ID</label>
          <input
            className="form-control"
            id="reservationId"
            rows="3"
            placeholder={Taxi.reservationId}
            onChange={(e) => setreservationId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            className="form-control"
            id="contactNumber"
            rows="3"
            placeholder={Taxi.contactNumber}
            onChange={(e) => setcontactNumber(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">
          Update Reservation
        </button>
        &nbsp;
      </form>
      <br></br>
      <br></br>
      <button className="btn btn-danger" onClick={onDelete}>
        <a className="btn btn-danger">Delete Reservation</a>
      </button>
      <br></br>
      <br></br>
      <a href="/adminReservations">
        <button className="btn btn-primary">Go Back</button>
      </a>
    </div>
  );
}

export default UpdateTaxi;
