import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar" 
import Reservations from "./pages/reservations" 
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import Logout from "./pages/logout"
import Profile from "./pages/profile"
import AddTaxiReservation from "./pages/addTaxi"

//admin panel
import AdminPanel from "./pages/adminPanel"
import AdminReservations from "./pages/adminPages/Reservations/adminReservations"
import AdminReservationsUpdate from "./pages/adminPages/Reservations/updateReservations"
import PaymentDashboard from "./pages/adminPages/Payments/PaymentDashboard";
import LocalPaymentGateway from "./pages/clientPages/LocalPaymentGateway";
import StripePaymentGateway from "./pages/clientPages/StripePaymentGateway";
import UpdatePayment from "./pages/adminPages/Payments/UpdatePayment";
import PaymentOptions from "./pages/clientPages/PaymentOptions";
import AdminTaxiReservationUpdate from "./pages/adminPages/Taxi/updateTaxi";
import AdminTaxiReservation from "./pages/adminPages/Taxi/adminTaxiReservations";
import ReservationInfo from "./pages/adminPages/ReservationInfo/reservationInfo";
import UpdateReservationInfo from './pages/adminPages/ReservationInfo/updateReservationInfo';
import ReservationInfoView from './pages/adminPages/ReservationInfo/viewReservation';
import Hotel from './pages/hotel';
import HotelView from './pages/hotelView';
import UpdateHotel from './pages/updateHotel';




function App() {

  return (
    <div>
      <NavBar />

      <Router>
        <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservations/:id" element={<Reservations />} />
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/adminReservations" element={<AdminReservations />} />
        <Route exact path="/adminUpdateReservations/:id" element={<AdminReservationsUpdate />} />
            
        <Route exact path="/payments" element={<PaymentDashboard />} />
        <Route exact path="/payments/local" element={<LocalPaymentGateway />} />
        <Route exact path="/payments/stripe" element={<StripePaymentGateway />} />
        <Route exact path="/paymentUpdate/:id" element={<UpdatePayment />} />
        <Route exact path="/paymentOption" element={<PaymentOptions />} />
        <Route exact path="/home" element={<Home />} />

        <Route exact path="/adminUpdateTaxi/:id" element={<AdminTaxiReservationUpdate />} />
        <Route exact path="/adminTaxi" element={<AdminTaxiReservation />} />
        <Route exact path="/addTaxi" element={<AddTaxiReservation />} />
        <Route exact path="/reservationInfo" element={<ReservationInfo />} />
        <Route exact path="/updateReservationInfo/:id" element={<UpdateReservationInfo />} />
        <Route exact path="/viewReservationInfo" element={<ReservationInfoView />} />
        <Route exact path="/addHotel" element={<Hotel />} />
        <Route exact path="/viewHotel" element={<HotelView />} />
        <Route exact path="/updateHotel/:id" element={<UpdateHotel />} />

        </Routes>
      </Router>
</div>
  );
}

export default App;
