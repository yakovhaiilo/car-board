import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Facebook = () => {
  const responseFacebook = (response) => {
    const {email, name , accessToken } = response;
    axios({
        method: "POST",
        url: `api/facebookLogin`,
        data: {name, email, accessToken}
      })
        .then((response) => {
        const {user,success,token} = response.data;
        localStorage.setItem("name", JSON.stringify(user.name));
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("_id", JSON.stringify(user._id));
        localStorage.setItem("token", JSON.stringify(token));
        toast.success(success); 
        })
        .catch((error) => {
            console.log(error);
         
        });
  };

  return (
    <div>
      <FacebookLogin
        appId="3668461106539952"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-primary btn-lg btn-block"
          >
            <i className="fab fa-facebook pr-2"></i> Login with Facebook
          </button>
        )}
      />
    </div>
  );
};

export default Facebook;
