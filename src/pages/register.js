import React from "react";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const defaultRole = "Traveler";

  let data = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    role: defaultRole,
    password: password,
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8080/users", data);
      if (res) {
        console.log(data);
        alert("Account created successfully");
        window.location.href="/login"
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Register</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            placeholder=""
            type="text"
            className="form-control"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            id="lastname"
            rows="3"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            id="password"
            rows="3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        
        <br></br>
        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
      <br></br>
      <br></br>
      <a href="/">
        <button className="btn btn-primary">Back to Home</button>
      </a>
    </div>
  );
}

export default Register;
