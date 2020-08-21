import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
import Layout from "../../core/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "yakov",
    email: "yakov@gmail.com",
    password: "rrrrrr",
  });

  const { name, email, password } = values;

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `api/signup`,
      data: { name, email, password }
    })
      .then((response) => {
        console.log('SIGNUP SUCCESS', response);
        setValues({ ...values, name: "", email: "", password: "" });
        toast.success(response.data.success);
      })
      .catch((error) => {
        console.log('SIGNUP ERROR', error.response.data);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <lable className="text-muted">Name</lable>
        <input
          onChange={handleChange}
          name={'name'}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

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
        <h1 className="p-5 text-center">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
  );
};

export default Signup;
