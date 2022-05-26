import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReservationInfo() {

  const [id, setId] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [availableRooms, setAvailableRooms] = useState("");
  const [price, setPrice] = useState("");
  const [reservationInfo, setReservationInfo] = useState("");

  let data = {
    id: id,
    roomType: roomType,
    description: description,
    availableRooms: availableRooms,
    price: price
  };

  useEffect(() => {
    fetch("http://localhost:8080/reservationInfo")
      .then((response) => response.json())
      .then((responseData) => {
        setReservationInfo(responseData);
      });
    console.log(reservationInfo);
  }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.post("http://localhost:8080/reservationInfo", data);
          if (res) {
            console.log(data);
            alert("Reservation Added successfully");
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
           <h1 className="text-center">Add Reservation Infomation</h1>
          <br></br>
           <form className="form" onSubmit={handleSubmit}>

           {/* <div className="form-group">
          <label >Reservation Info ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled
            required />
        </div> */}
        <div className="form-group">
          <label >Room Type</label>
          <input
            placeholder="Enter Hotel Name"
            type="text"
            className="form-control"
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
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
          <label >Available Rooms</label>
          <input
            className="form-control"
            id="availableRooms"
            rows="3"
            value={availableRooms}
            onChange={(e) => setAvailableRooms(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Price</label>
          <input
            className="form-control"
            id="price"
            rows="3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required />
        </div>
      <br></br>
        <button type="submit" className="btn btn-primary">Add ReservationInfo</button>
       
      </form>
      <br></br>
      <a href="/viewReservationInfo"><button className="btn btn-primary">View Reservation</button></a>
      <br></br><br></br>
      
      <a href="/reservationInfo"><button className="btn btn-primary">Back to Home</button></a>
        </div>
        
    )
}

export default ReservationInfo
