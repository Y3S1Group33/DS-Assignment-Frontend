import React from 'react'
import axios from 'axios'

function TaxiReservationCard(props) {

    const onDelete = () => {
        if (window.confirm("Do you want to delete this")) {
            axios
                .delete(`http://localhost:8080/taxi?id=${props.id}`)
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
                <h5 class="card-header">Taxi Reservation id : {props.id}</h5>
                <div class="card-body">
                    <p class="card-text">Driver Name : {props.driverName}</p>
                    <p class="card-text">Vehicle type : {props.vehicleType}</p>
                    <p class="card-text">Reservation ID : {props.reservationId}</p>
                    <p class="card-text">Contact Number : {props.contactNumber}</p>
                    <button className="btn btn-danger" onClick={onDelete}>
                        <a className="btn btn-danger">Delete Taxi Reservation</a>
                    </button>
                </div>

            </div>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </div>
    )
}

export default TaxiReservationCard