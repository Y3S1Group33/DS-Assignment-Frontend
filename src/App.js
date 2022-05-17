import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar" 
import Reservations from "./pages/reservations" 
import Home from "./pages/home"

//admin panel
import AdminPanel from "./pages/adminPanel"
import AdminReservations from "./pages/adminPages/Reservations/adminReservations"
import AdminReservationsUpdate from "./pages/adminPages/Reservations/updateReservations"



function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/admin" element={<AdminPanel />} />
        <Route exact path="/adminReservations" element={<AdminReservations />} />
        <Route exact path="/adminUpdateReservations/:id" element={<AdminReservationsUpdate />} />
        </Routes>
      </Router>
</div>
  );
}

export default App;
