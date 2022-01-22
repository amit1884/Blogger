import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import Container from "../Components/Container";
import GetBlogForm from "../Components/GetBlogForm";
import Header from "../Components/Header";
import MainHeading from "../Components/MainHeading";
// import BgImg from "../assets/images/1.png";
import "../assets/styles/style.css";

function Home() {
  const [blogId, setBlogId] = useState("");
  // const postsUrl = `${BACKEND_URL}2399953/posts?key=${API_KEY}`;

  const responseGoogle = (response) => {
    console.log(response);
  };

  const getBlog = async (e) => {
    e.preventDefault();
    if (blogId !== "") {
      const blogUrl = `${process.env.REACT_APP_BACKEND_URL}${blogId}?key=${process.env.REACT_APP_API_KEY}`;
      const res = await fetch(blogUrl);
      const dat = await res.json();
      console.log(dat);
    }
  };

  return (
    <>
      <Container className="d-flex  align-items-center flex-column bg-red">
        <Header />
        <MainHeading />
        <GetBlogForm getBlog={getBlog} blogId={blogId} setBlogId={setBlogId} />
        <br />
        <br />
        <div>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Sign In"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="google-btn"
          />
        </div>
        {/* <div className="d-flex justify-content-center">
          <img src={BgImg} alt="" className="home-img" />
        </div> */}
      </Container>
    </>
  );
}

export default Home;
