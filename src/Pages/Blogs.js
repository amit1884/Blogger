import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import BlogDetails from "../Components/BlogDetails";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PostsList from "../Components/PostsList";

function Blogs() {
  const [blogs, setBlogs] = useState(null);
  const [postLink, setPostLink] = useState("");
  const [activeBlog, setActiveBlog] = useState({});
  const fetchBlog = async () => {
    const accessToken = Cookies.get("accessToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      "https://www.googleapis.com/blogger/v3/users/self/blogs?",
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    setBlogs(data.items);
    setPostLink(data.items[0].posts.selfLink);
    setActiveBlog({ title: data.items[0].name, id: data.items[0].id });
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <Container className="d-flex flex-column bg-secondary p-0">
      <Header className="bg-secondary" />
      <main className="d-flex main bg-white">
        <BlogDetails
          blogs={blogs}
          setPostLink={setPostLink}
          setActiveBlog={setActiveBlog}
        />
        <PostsList postLink={postLink} activeBlog={activeBlog} />
      </main>
    </Container>
  );
}

export default Blogs;
