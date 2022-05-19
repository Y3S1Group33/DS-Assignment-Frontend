import React, { useState } from "react";
import axios from "axios";

function Reservations() {
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
  
  

  let HandleSubmit = async (e) => {
    
    e.preventDefault();
      try {
      let res = await axios.post("http://localhost:8080/reservations", data);
      if (res) {
        console.log(data);
        alert("Reservation created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
      alert("Date already taken")
    }

    
  };

  return (
    <div className="container">
      <h1 className="text-center">Add Reservation</h1>

      <form className="form" onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Room Type</label>
          <input
            placeholder="AC or Non AC"
            type="text"
            className="form-control"
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Number of rooms</label>
          <input
            className="form-control"
            id="numberOfRooms"
            rows="3"
            value={numberOfRooms}
            onChange={(e) => setNumberOfRooms(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            id="price"
            rows="3"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            rows="3"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Add Reservation
        </button>
      </form>
      <br></br>
      <br></br>
      <a href="/">
        <button className="btn btn-primary">Back to Home</button>
      </a>
    </div>
  );
}

export default Reservations;
