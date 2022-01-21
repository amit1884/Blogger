import React from "react";
import { BACKEND_URL, API_KEY } from "../assets/helper/helper";
import Container from "../Components/Container";
import GetBlogForm from "../Components/GetBlogForm";
import Header from "../Components/Header";
function Home() {
  console.log();
  const postsUrl = `${BACKEND_URL}2399953/posts?key=${API_KEY}`;
  const blogUrl = `${BACKEND_URL}2399953?key=${API_KEY}`;
  const getPosts = async () => {
    const response = await fetch(postsUrl);
    const data = await response.json();

    console.log(data);
  };

  const getBlog = async (e) => {
    e.preventDefault();
    const res = await fetch(blogUrl);
    const dat = await res.json();

    console.log(dat);
  };

  return (
    <>
      <Header />
      <Container className="d-flex  align-items-center flex-column">
        <GetBlogForm getBlog={getBlog} />
      </Container>
    </>
  );
}

export default Home;
