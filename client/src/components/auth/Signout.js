import React from "react";
import { Redirect } from "react-router-dom";

const Signout = props => {
  localStorage.removeItem('user');
  return <Redirect to="/" />;
};

export default Signout;
