import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateReservations() {

  const params = useParams();

  const [reservation, setReservation] = useState("");

  const [userId, setUserId] = useState("");
  const [roomType, setRoomType] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  let data = {
    userId: userId,
    roomType: roomType,
    description: description,
    numberOfRooms: numberOfRooms,
    price: price,
    date: date,
  };

  useEffect(() => {
    fetch(`http://localhost:8080/reservations/getById?id=${params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setReservation(responseData);
      });
    console.log(reservation);
  }, []);


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.put(`http://localhost:8080/reservations?id=${params.id}`, data);
          if (res) {
            console.log(data);
            alert("Reservation updated successfully");
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="container">
           <h1 className="text-center">Update Reservation</h1>

           <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label >User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={reservation.userId}
            onChange={(e) => setUserId(e.target.value)}
            readOnly />
        </div>

        <div className="form-group">
          <label >Room Type</label>
          <input
            type="text"
            className="form-control"
            id="roomType"
            placeholder={reservation.roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder={reservation.description}
            onChange={(e) => setDescription(e.target.value)}
            required></textarea>
        </div>

        <div className="form-group">
          <label >Number of rooms</label>
          <input
            className="form-control"
            id="numberOfRooms"
            rows="3"
            placeholder={reservation.numberOfRooms}
            onChange={(e) => setNumberOfRooms(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Price</label>
          <input
            className="form-control"
            id="price"
            rows="3"
            placeholder={reservation.price}
            onChange={(e) => setPrice(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label >Date</label>
          <input
            type="text"
            className="form-control"
            id="date"
            rows="3"
            placeholder={reservation.date}
            onChange={(e) => setDate(e.target.value)}
            required />
        </div>
      <br></br>
        <button type="submit" className="btn btn-primary">Update Reservation</button>
       
      </form>
      <br></br><br></br>
      <a href="/adminReservations"><button className="btn btn-primary">Go Back</button></a>
        </div>
    )
}

export default UpdateReservations
