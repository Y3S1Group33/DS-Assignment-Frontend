import React, { useEffect, useState } from "react";
import "./navBar.css"

function NavBar() {
  const [loggedUser, setLoggedUser] = useState([]);
  const [Reservations, setReservations] = useState([]);

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            HMS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>

              {/*<li className="nav-item">*/}
              {/*  <a className="nav-link" href="/reservations">*/}
              {/*    Reservations*/}
              {/*  </a>*/}
              {/*</li>*/}

              {(loggedUser.role == "Admin") && (
              <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Admin panel
                </a>
              </li>
              )}
              
              {(loggedUser !== null) && (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
              )}

            </ul>

            {(loggedUser != null) && (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {loggedUser.firstName}
                <span className="nav-values"> {count} </span>
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/profile">
                  Profile
                </a>
                <a className="dropdown-item" href="/logout">
                  Logout
                </a>
              </div>
              
            </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
