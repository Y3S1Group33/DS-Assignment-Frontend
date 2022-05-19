import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateReservationInfo() {
  const params = useParams();
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


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `http://localhost:8080/hms/hotel/${params.id}`,
        data
      );
      if (res) {
        console.log(data);
        alert("Hotel updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/hms/hotel/${params.id}`)
      .then((response) => response.json())
      .then((responseData) => {
        setHotel(responseData);
      });
    console.log(hotel);
  }, []);

  const onDelete = () => {
    if (window.confirm("Do you want to delete this")) {
      axios
        .delete(`http://localhost:8080/hms/hotel/${params.id}`)
        .then((res) => {
          alert("Deleted successfuly");
          window.location.href = "/home";
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
        value={hotel.id}
        onChange={(e) => setId(e.target.value)}
        disabled
        required />
        </div>
        <div className="form-group">
        <label >Hotel Name</label>
        <input
        placeholder={hotel.hotelName}
        type="text"
        className="form-control"
        id="hotelName"
        onChange={(e) => setHotelName(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >Description</label>
        <textarea
        className="form-control"
        id="description"
        rows="3"
        placeholder={hotel.description}
        onChange={(e) => setDescription(e.target.value)}
        required></textarea>
        </div>

        <div className="form-group">
        <label >Address</label>
        <input
        className="form-control"
        id="address"
        rows="3"
        placeholder={hotel.address}
        onChange={(e) => setAddress(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >Telephone</label>
        <input
        className="form-control"
        id="telephone"
        rows="3"
        placeholder={hotel.telephone}
        onChange={(e) => setTelephone(e.target.value)}
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
      <a href="/reservationInfo">
        <button className="btn btn-primary">Go Back</button>
      </a>
    </div>
  );
}

export default UpdateReservationInfo;
