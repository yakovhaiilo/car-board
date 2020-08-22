import React from "react";
import { Redirect } from "react-router-dom";

const Signout = props => {
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
  return <Redirect to="/" />;
};

export default Signout;
