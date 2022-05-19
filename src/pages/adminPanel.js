import React, { useEffect, useState } from "react";
import imageUser from '../images/admin.jpg'

export default function AdminPanel() {

    const [Reservations, setReservations] = useState([]);

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
        <h1 className="text-center">Admin Panel</h1>   

        <div class="card-deck" style={{display: 'flex', marginTop: '50px'}}>
  
  
        <div class="card">
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title"> User Management</h5>
      <p class="card-text">This is a action.</p>
      <a href="/"><button className="btn btn-primary">Manage Users</button></a>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" href="/adminReservations" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Reservations Management</h5>
      <p class="card-text">Number of reservations: {Reservations.length}</p>
      <a href="/adminReservations"><button className="btn btn-primary">Manage Reservations</button></a>
    </div>
  </div>
  
  <div class="card">
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Payments Management</h5>
      <p class="card-text">This is a action.</p>
      <a href="/payments"><button className="btn btn-primary">Manage Payments</button></a>
    </div>
  </div>

  <div class="card">
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Transportation Management</h5>
      <p class="card-text">This is a action.</p>
      <a href="/adminTaxi"><button className="btn btn-primary">Manage Taxi</button></a>
    </div>
  </div>

</div> 
    </div>
  )
}
