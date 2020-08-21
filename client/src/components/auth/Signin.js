import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
import Layout from "../../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };


  const clickSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `api/signin`,
      data: {email, password }
    })
      .then((response) => {
        console.log('SIGNIN SUCCESS', response);
        // save response user / token  local storage '
        setValues({ ...values,  email: "", password: "" });
        toast.success(response.data.success);
      })
      .catch((error) => {
        console.log('SIGNIN ERROR', error.response.data);
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
     <div className="form-group">
        <lable className="text-muted">Email</lable>
        <input
          onChange={handleChange}
          name={'email'}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <lable className="text-muted">Password</lable>
        <input
          onChange={handleChange}
          name={"password"}
          value={password}
          type="password"
          className="form-control"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        <h1 className="p-5 text-center">Signin</h1>
        {signinForm()}
      </div>
    </Layout>
  );
};

export default Signin;
