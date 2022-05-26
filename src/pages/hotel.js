import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Hotel() {
  const[id, setId] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [hotel, setHotel] = useState("");

  let data = {
    id: id,
    hotelName: hotelName,
    description: description,
    address: address,
    telephone: telephone,
  };

  useEffect(() => {
    fetch("http://localhost:8080/hms/hotel")
      .then((response) => response.json())
      .then((responseData) => {
        setHotel(responseData);
      });
    console.log(hotel);
  }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.post("http://localhost:8080/hms/hotel", data);
          if (res) {
            console.log(data);
            alert("Hotel added successfully");
            window.location.href="/viewHotel" 
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="container">
           <br></br>
          <h1 className="text-center">Add Hotel</h1>
           <form className="form" onSubmit={handleSubmit}>
{/* 
           <div className="form-group">
          <label >Reservation Info ID</label>
          <input
            type="text"
            className="form-control"
            id="hotelId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled
            required />
        </div> */}
        <div className="form-group">
          <label >Hotel Name</label>
          <input
            placeholder="Enter Hotel Name"
            type="text"
            className="form-control"
            id="hotelName"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required></textarea>
        </div>

        <div className="form-group">
          <label >Address</label>
          <input
            className="form-control"
            id="availableRooms"
            rows="3"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Telephone</label>
          <input
            className="form-control"
            id="price"
            rows="3"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required />
        </div>
      <br></br>
        <button type="submit" className="btn btn-primary">Add Hotel</button>
       
      </form>

      <br></br>
      <a href="/viewHotel"><button className="btn btn-primary">View Hotels</button></a>
      <br></br><br></br>
      <a href="/home"><button className="btn btn-primary">Back to Home</button></a> 
        </div>
    )
}

export default Hotel
