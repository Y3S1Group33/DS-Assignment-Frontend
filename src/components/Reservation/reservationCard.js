import React from 'react'
import axios from 'axios'

function ReservationCard(props) {

    const onDelete = () => {
        if (window.confirm("Do you want to delete this")) {
          axios
            .delete(`http://localhost:8080/reservations?id=${props.id}`)
            .then((res) => {
              alert("Deleted successfuly");
              window.location.href = "/profile";
            });
        } else {
          alert("Record not deleted");
        }
      };

    return (
        <div>
        <div class="card">
  <h5 class="card-header">Reservation id : {props.id}</h5>
  <div class="card-body">
    <h5 class="card-title">{props.description}</h5>
    <p class="card-text">Number of rooms : {props.numberOfRooms}</p>
    <p class="card-text">Rooms type : {props.roomType}</p>
    <p class="card-text">Price : {props.price}</p>
    <p class="card-text">Date : {props.date}</p>
    <button className="btn btn-danger" onClick={onDelete}>
        <a className="btn btn-danger">Delete Reservation</a>
      </button>
  </div>
  
  </div>
  <hr></hr>
  <hr></hr>
  <hr></hr>
</div>
    )
}

export default ReservationCard
