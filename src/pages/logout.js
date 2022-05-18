import React from 'react'

let handleLogout = () =>{
    localStorage.removeItem('user');
    alert("Logged out successfuly!")
    window.location.href="/login";
}

export default function() {
  return (
    <div>
        <br></br><br></br><br></br>
       <center> <button className="btn btn-primary" onClick={handleLogout}>Click here to logout from the system?</button> </center>
    </div>
  )
}
