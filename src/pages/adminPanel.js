import React, { useEffect, useState } from "react";
import imageUser from '../images/admin.jpg'
import adminPanel from "../images/adminPanel.jpg"
import homeItem from "../images/hotelItem.jpg"

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
    <div style={{
      backgroundImage:`url(${adminPanel})`,backgroundSize:"cover",backgroundPosition:"bottom"}}>
      <div>
        <h1 style={{
          color:"white",backgroundColor:"darkslateblue"}} className="text-center">Admin Panel</h1>
      </div>


        <div class="card-deck" style={{display: 'flex', marginTop: '50px',}}>
  
  
        <div class="card" style={{
          backgroundImage:`url(${homeItem})`,backgroundSize:"cover",backgroundPosition:"bottom"}} >
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Hotel Management</h5>
      <a href="/viewHotel"><button className="btn btn-primary">Manage Hotel</button></a>
    </div>
  </div>

  <div class="card" style={{
    backgroundImage:`url(${homeItem})`,backgroundSize:"cover",backgroundPosition:"bottom"}}>
    <img class="card-img-top" href="/adminReservations" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Reservations Management</h5>
      {/*<p class="card-text">Number of reservations: {Reservations.length}</p>*/}
      <a href="/adminReservations"><button className="btn btn-primary">Manage Reservations</button></a>
    </div>
  </div>
  
  <div class="card" style={{
    backgroundImage:`url(${homeItem})`,backgroundSize:"cover",backgroundPosition:"bottom"}}>
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Payments Management</h5>

      <a href="/payments"><button className="btn btn-primary">Manage Payments</button></a>
    </div>
  </div>

  <div class="card" style={{
    backgroundImage:`url(${homeItem})`,backgroundSize:"cover",backgroundPosition:"bottom"}}>
    <img class="card-img-top" src={imageUser} alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">Transportation Management</h5>
      <a href="/adminTaxi"><button className="btn btn-primary">Manage Taxi</button></a>
    </div>
  </div>

</div> 
    </div>
  )
}
