import React from "react";
import { Link } from 'react-router-dom';

function Home () {
    return(<div className = 'App'>    
                <h1>this is home page</h1>
                <Link to="/Login">Login</Link>
                <Link to="/register">Register</Link>
          </div>
    ) 
  }
  
  export default Home;
  