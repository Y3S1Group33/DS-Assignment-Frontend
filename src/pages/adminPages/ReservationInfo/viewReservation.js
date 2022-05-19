import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReservationInfoView() {

  const [reservationInfo, setReservationInfo] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/reservationInfo").then(res => {
        console.log(res.data)
        setReservationInfo(res.data)
    }).catch(err => {
        console.log(err);
    })
}, [])

    return (
        <div className="container">

        <h1 className="text-center">Reservation Details</h1>
        <br></br>
          <table className="table">
          <thead>
              <tr>
                <th scope="col">ReservationInfo ID</th>
                <th scope="col">Room Type</th>
                <th scope="col">Description</th>
                <th scope="col">Available Rooms</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
          </thead>
            {reservationInfo.map(reservationInfo => {
              return (
            <tbody>
              <tr >
                <th>{reservationInfo.id}</th>
                <td>{reservationInfo.roomType}</td>
                <td>{reservationInfo.description}</td>
                <td>{reservationInfo.availableRooms}</td>
                <td>{reservationInfo.price}</td>
                <td>
                  <button  className="btn btn-success">
                  <Link to={`/updateReservationInfo/${reservationInfo.id}`} className="btn btn-success">View Details
                            </Link>
                  </button>
                  
                </td>
              </tr>
            </tbody>
              );
          })}
          </table>
           
      <br></br><br></br>
      <a href="/reservationInfo"><button className="btn btn-primary">Back to Home</button></a>
        </div>
      
        
    )
}

export default ReservationInfoView
