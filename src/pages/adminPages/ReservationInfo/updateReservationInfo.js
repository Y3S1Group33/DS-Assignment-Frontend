import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateReservationInfo() {
  const params = useParams();
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

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `http://localhost:8080/reservationInfo/${params.id}`,
        data
      );
      if (res) {
        console.log(data);
        alert("Reservation Info updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/reservationInfo/${params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setReservationInfo(responseData);
      });
    console.log(reservationInfo);
  }, []);

  const onDelete = () => {
    if (window.confirm("Do you want to delete this")) {
      axios
        .delete(`http://localhost:8080/reservationInfo/${params.id}`)
        .then((res) => {
          alert("Deleted successfuly");
          window.location.href = "/reservationInfo";
        });
    } else {
      alert("Record not deleted");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Update Reservation</h1>

      <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
        <label >Reservation Info ID</label>
        <input
        type="text"
        className="form-control"
        id="userId"
        value={reservationInfo.id}
        onChange={(e) => setId(e.target.value)}
        disabled
        required />
        </div>
        <div className="form-group">
        <label >Room Type</label>
        <input
        placeholder={reservationInfo.roomType}
        type="text"
        className="form-control"
        id="roomType"
        onChange={(e) => setRoomType(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >Description</label>
        <textarea
        className="form-control"
        id="description"
        rows="3"
        placeholder={reservationInfo.description}
        onChange={(e) => setDescription(e.target.value)}
        required></textarea>
        </div>

        <div className="form-group">
        <label >Available Rooms</label>
        <input
        className="form-control"
        id="availableRooms"
        rows="3"
        placeholder={reservationInfo.availableRooms}
        onChange={(e) => setAvailableRooms(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >Price</label>
        <input
        className="form-control"
        id="price"
        rows="3"
        placeholder={reservationInfo.price}
        onChange={(e) => setPrice(e.target.value)}
        required />
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
      <a href="/viewReservationInfo">
        <button className="btn btn-primary">Go Back</button>
      </a>
    </div>
  );
}

export default UpdateReservationInfo;
