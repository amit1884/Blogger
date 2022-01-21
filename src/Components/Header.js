import React from "react";
import GoogleLogin from "react-google-login";
import "../assets/styles/headerStyle.css";
function Header() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="header-container d-flex align-items-center">
      <div className="brand">
        <p>Blogger</p>
      </div>
      <div className="links">
        <GoogleLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Header;
