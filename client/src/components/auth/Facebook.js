import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";

const Facebook = ({setFbUser}) => {
  const responseFacebook = (response) => {
    const {accessToken ,userID } = response;
    axios({
        method: "POST",
        url: `api/facebookLogin`,
        data: {accessToken,userID}
      })
        .then((response) => {
          setFbUser(response)
        })
        .catch((error) => {
            console.log(error); 
        });
  };
  return (
    <div>
      <FacebookLogin
        appId='3668461106539952'
        autoLoad={false}
        callback={responseFacebook}
        disableMobileRedirect={true}
        isMobile={false}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            className="btn btn-primary btn-lg"
          >
            <i className="fab fa-facebook pr-2"></i> Login with Facebook
          </button>
        )}
      />
    </div>
  );
};

export default Facebook;
