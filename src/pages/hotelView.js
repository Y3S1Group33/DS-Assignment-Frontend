import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HotelView() {
  
  const [hotel, setHotel] = useState("");

  

  useEffect(() => {
    fetch("http://localhost:8080/hms/hotel")
      .then((response) => response.json())
      .then((responseData) => {
        setHotel(responseData);
      });
    console.log(hotel);
  }, []);

    return (
        <div className="container">
           <h1 className="text-center">Hotel Details</h1>
           <br></br>
          <table className="table">
          <thead>
              <tr>
                <th scope="col">Hotel ID</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Description</th>
                <th scope="col">Address Rooms</th>
                <th scope="col">Telephone</th>
                <th scope="col">Action</th>
              </tr>
          </thead>
            {hotel.map((hotel) => {
              return (
            <tbody>
              <tr >
                <th>{hotel.id}</th>
                <td>{hotel.hotelName}</td>
                <td>{hotel.description}</td>
                <td>{hotel.address}</td>
                <td>{hotel.telephone}</td>
                <td>
                  <button  className="btn btn-success">
                  <Link to={`/updateHotel/${hotel.id}`} className="btn btn-success">View Details
                            </Link>
                  </button>
                  
                </td>
              </tr>
            </tbody>
              );
          })}
          </table>
          <br></br><br></br>
          <h1 className="text-center">Add Hotel</h1>
           
      <br></br><br></br>
      <a href="/hotel"><button className="btn btn-primary">Back to Home</button></a>
        </div>
    )
}

export default HotelView
