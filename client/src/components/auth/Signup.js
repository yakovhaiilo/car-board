import React, { useState } from "react";
import axios from "axios";
import { Redirect} from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
import useStyles from "./useStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";



import Layout from "../core/Layout";
import {isAuth} from './halpers';




const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const { name, email, password } = values;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const clickSubmit = (e) => {
    console.log(name,email,password)
    e.preventDefault();
    axios({
      method: "POST",
      url: `api/signup`,
      data: { name, email, password }
    })
      .then((response) => {
        console.log(response)
        setValues({ ...values, name: "", email: "", password: ""});
        toast.success(response.data.success)
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
  <div className={classes.paper}>
    <Avatar className={classes.avatar}></Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <form className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="name"
        label="full name"
        name="name"
        autoComplete="name"
        autoFocus
        onChange={handleChange}
        value={name}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleChange}
        value={email}
      />

      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleChange}
        value={password}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={clickSubmit}
      >
        Signup
      </Button>
    </form>
  </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        {isAuth() ? <Redirect to='/cars'/> : null } 
        {signupForm()}
      </div>
    </Layout>
  );
};

export default Signup;
