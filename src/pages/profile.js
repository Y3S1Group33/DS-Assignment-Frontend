import React, { useEffect, useState } from "react";

export default function Profile() {
  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedUser(user);
    }
  }, []);

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
    </div>
  );
}
