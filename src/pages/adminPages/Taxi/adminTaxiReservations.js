import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TaxiReservations() {
  const [Taxi, setTaxiReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/taxi")
      .then((response) => response.json())
      .then((responseData) => {
        setTaxiReservations(responseData);
      });
    console.log(Taxi);
  }, []);


  return (
    <div>
      <h1 className="text-center">Admin Taxi Reservations</h1>
      <div className="container">
        <table className="table">
          <tr>
            <th scope="col">Taxi ID</th>
            <th scope="col">Driver Name</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Reservation ID</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Actions</th>
          </tr>
          {Taxi.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.taxiId}</td>
                <td>{item.driverName}</td>
                <td>{item.vehicleType}</td>
                <td>{item.reservationId}</td>
                <td>{item.contactNumber}</td>
                <td>
                  <button  className="btn btn-success">
                  <Link to={`/adminUpdateTaxi/${item.id}`} className="btn btn-success">View Details
                            </Link>
                  </button>
                  
                </td>
              </tr>
            );
          })}
        </table>

        <a href="/reservations"><button className="btn btn-primary">Add reservation</button></a>
      </div>
    </div>
  );
}
