import React, { useEffect, useState } from "react";
import ReservationCard from "../components/Reservation/reservationCard"

export default function Profile() {
  const [loggedUser, setLoggedUser] = useState([]);
  const [Reservations, setReservations] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/reservations")
      .then((response) => response.json())
      .then((responseData) => {
        setReservations(responseData);
      });
    console.log(Reservations);
  }, []);

  

  const loggedUserReservations = [];
  
  for (let i=0; i<Reservations.length;i++){
    if(Reservations[i].userId == loggedUser.id){
      loggedUserReservations.push(Reservations[i])  
    }
  }

  const count = loggedUserReservations.length;

  return (
    <div className="container">
      <h1 className="text-center">Hello {loggedUser.firstName}!</h1>
        <br></br><br></br><br></br>
      <div className="card text-center">
        <div className="card-header">{loggedUser.firstName}  {loggedUser.lastName}</div>
        <div className="card-body">
          <h5 className="card-title">User Id : {loggedUser.id}</h5>
          <h5 className="card-title">First Name : {loggedUser.firstName}</h5>
          <h5 className="card-title">Last Name : {loggedUser.lastName}</h5>
          <h5 className="card-title">Email : {loggedUser.email}</h5>
          <h5 className="card-title">Role : {loggedUser.role}</h5>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
        </div>
      </div>
      <br></br><br></br><br></br>
<hr></hr>
      <br></br><br></br><br></br>
      <h1 className="text-center">My Reservations</h1>

      {(count==0) && (
          <div><h1 className="text-center">You dont have any reservations</h1></div>
          )
      }
        

      {loggedUserReservations.map((item) => {
            return (
              <div>
                <ReservationCard id={item.id} roomType={item.roomType} description={item.description} numberOfRooms={item.numberOfRooms} price={item.price} date={item.date} />
              </div>
            );
          })}
    
    </div>
  );
}
