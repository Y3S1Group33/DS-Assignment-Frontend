import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Reservations() {
  const [Reservations, setReservations] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/reservations")
      .then((response) => response.json())
      .then((responseData) => {
        setReservations(responseData);
      });
    console.log(Reservations);
  }, []);


  return (
    <div>
      <h1 className="text-center">Admin Reservations</h1>
      <div className="container">
        <table className="table">
          <tr>
            <th scope="col">Reservation ID</th>
            <th scope="col">User ID</th>
            <th scope="col">Room Type</th>
            <th scope="col">Descriptino</th>
            <th scope="col">Number of rooms</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
          {Reservations.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.roomType}</td>
                <td>{item.description}</td>
                <td>{item.numberOfRooms}</td>
                <td>{item.price}</td>
                <td>{item.date}</td>
                <td>
                  <button  className="btn btn-success">
                  <Link to={`/adminUpdateReservations/${item.id}`} className="btn btn-success">Update
                            </Link>
                  </button>
                  <button className="btn btn-danger">Delete
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
