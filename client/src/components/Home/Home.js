import React from "react";
import {Link} from "react-router-dom"
import axios from 'axios'
import './Home.css'



function Home() {
  return (
    <div className ="Home">
      <div className = "Home-container"></div>
      <Link to="/Login">
        <button>login</button>
      </Link>
      <Link to="/register">
         <button>register</button>
        </Link>
      <h1 className = "Home"> Cars Board </h1>
    </div>
  );
}

export default Home;
