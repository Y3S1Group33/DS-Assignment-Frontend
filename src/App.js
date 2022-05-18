import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar" 
import Reservations from "./pages/reservations" 
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import Logout from "./pages/logout"
import Profile from "./pages/profile"

//admin panel
import AdminPanel from "./pages/adminPanel"
import AdminReservations from "./pages/adminPages/Reservations/adminReservations"
import AdminReservationsUpdate from "./pages/adminPages/Reservations/updateReservations"
import PaymentDashboard from "./pages/adminPages/Payments/PaymentDashboard";
import PaymentDelete from "./pages/adminPages/Payments/PaymentDelete";
import LocalPaymentGateway from "./pages/clientPages/LocalPaymentGateway";
import StripePaymentGateway from "./pages/clientPages/StripePaymentGateway";



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
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/adminReservations" element={<AdminReservations />} />
        <Route exact path="/adminUpdateReservations/:id" element={<AdminReservationsUpdate />} />
            <Route exact path="/payments" element={<PaymentDashboard />} />
            <Route exact path="/payments/local" element={<LocalPaymentGateway />} />
            <Route exact path="/payments/stripe" element={<StripePaymentGateway />} />
        </Routes>
      </Router>
</div>
  );
}

export default App;
