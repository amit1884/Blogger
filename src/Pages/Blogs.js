import React from "react";
import BlogDetails from "../Components/BlogDetails";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PostsList from "../Components/PostsList";

function Blogs() {
  return (
    <Container className="d-flex flex-column bg-secondary">
      <Header className="header-container-dark" />
      <hr />
      <main className="d-flex main">
        <BlogDetails />
        <PostsList />
      </main>
    </Container>
  );
}

export default Blogs;
