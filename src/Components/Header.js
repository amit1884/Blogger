import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../assets/styles/headerStyle.css";
import { UserContext } from "../App";
function Header(props) {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);
  const logout = (response) => {
    console.log(response);
    Cookies.remove("accessToken");
    Cookies.remove("userData");
    Cookies.remove("tokenId");
    dispatch({ type: "REMOVE_USER" });
    navigate("/");
  };
  return (
    <div
      className={`header-container d-flex align-items-center justify-content-around`}
    >
      <div className="brand">
        <p>Blogger</p>
      </div>
      {Cookies.get("accessToken") && (
        <div className="links d-flex">
          <Link to="/blogs" className="link-items d-flex align-items-center">
            <span>
              <img src={state?.pic} alt="" className="user-pic" />
            </span>
            &nbsp;&nbsp;
            <span>{state?.email}</span>
          </Link>

          <GoogleLogout
            scope="https://www.googleapis.com/auth/blogger"
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      )}
    </div>
  );
}

export default Header;
