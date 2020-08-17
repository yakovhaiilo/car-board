import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [userPassword , setUserPassword] = useState("");
  const [userName , setUserName] = useState("");
  const user = { userName , userPassword };

  function handlesubmit(e) {
    e.preventDefault(); 
    axios.post("/register",user).then((res) =>{
          console.log(res)
    });
  }

  return (
    <div className="App">
      <h1>this is regitration page</h1>

      <form>
        <div className = "form-group">
          <label htmlFor="email">Email : </label>
          <input 
          type = "email"
          className = "form-control"
          name = "username" 
          onChange={(e) => setUserName(e.target.value)}
            />
        </div>
        <div className = "form-group">
          <label htmlFor = "password">Password : </label>
          <input
           type= "password" 
           className = "form-control"
           name = "password"
           onChange={(e) => setUserPassword(e.target.value)}
             />
        </div>
        <button
         type="submit"
         className="btn btn-dark"
         onClick = {handlesubmit}
          >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
