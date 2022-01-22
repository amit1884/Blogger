import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import Container from "../Components/Container";
import Header from "../Components/Header";
import MainHeading from "../Components/MainHeading";
import BgImg from "../assets/images/1.png";
import "../assets/styles/style.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
function Home() {
  // const postsUrl = `${BACKEND_URL}2399953/posts?key=${API_KEY}`;
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

  const responseGoogle = (response) => {
    console.log(response);

    const userData = {
      uName: response?.profileObj.name,
      email: response?.profileObj.email,
      pic: response?.profileObj.imageUrl,
    };
    Cookies.set("accessToken", response.accessToken);
    Cookies.set("userData", JSON.stringify(userData));
    Cookies.set("tokenId", response?.tokenId);
    dispatch({ type: "USER", payload: userData });
    navigate("/blogs", { replace: true });
  };

  return (
    <>
      <Container className="d-flex  align-items-center flex-column bg-red">
        <Header />
        <MainHeading />
        <br />
        <br />
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Sign In"
            scope="https://www.googleapis.com/auth/blogger"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="google-btn"
          />
        </div>
        <div className="d-flex justify-content-center">
          <img src={BgImg} alt="" className="home-img" />
        </div>
      </Container>
    </>
  );
}

export default Home;
