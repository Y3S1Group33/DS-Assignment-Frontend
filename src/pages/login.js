import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [userId, setUserId] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let HandleSubmit = async (e) => {
    e.preventDefault();

    let res = await axios.get(
      `http://localhost:8080/users/getByUserName?id=${userId}`
    );
    if (res) {
      console.log(res.data.id);
      console.log(res.data.password);
      console.log(userId);
      console.log(password);

      if (userId == res.data.id && password == res.data.password) {
        alert("Logged In Successfully");
        window.location.href = "/";
        localStorage.setItem("user", JSON.stringify(res.data));
      } else {
        alert("Incorrect password or User Id!");
      }
    } else {
      alert("Bad network connection!");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Login</h1>

      <form className="form" onSubmit={HandleSubmit}>
        <div className="form-group">
          <label>User ID</label>
          <input
            placeholder="user id"
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>User Name</label>
          <input
            placeholder="user name"
            type="text"
            className="form-control"
            id="userName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            placeholder="password"
            type="text"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br></br>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <br></br>
      <a href="/signup">
        <button className="btn btn-primary">Sign Up here</button>
      </a>
    </div>
  );
}

export default Login;
