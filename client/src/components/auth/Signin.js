import React, { useState } from "react";
import Layout from "../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Facebook from './Facebook';
import {authenticate, isAuth} from './halpers';
import { Redirect,withRouter} from "react-router-dom";

import {
  Avatar,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
import useStyles from "./useStyle";

const Signin = ({history}) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `api/signin`,
      data: {email, password }
    })
      .then((response) => {
        authenticate(response, () => {
          setValues({ ...values,  email: "", password: "" });
          toast.success(response.data.user);
        })
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };


 const setFbUser = ((response) => {
    authenticate(response, () => {
        isAuth() ? history.push('/cars') : history.push('/signin')
    })
  });

  const signinForm = () => (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>

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
            Sign In
          </Button>
        </form>
      </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        {isAuth() ? <Redirect to='/cars'/> : null } 
        <ToastContainer />
        {signinForm()}
        <Facebook setFbUser={setFbUser} />
      </div>
    </Layout>
  );
};

export default withRouter(Signin);

