import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../Components/Container";
import Header from "../Components/Header";
import PostDetail from "../Components/PostDetail";
import Spinner from "../Components/Spinner";

function Post() {
  const { b_id, p_id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchPostData = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}${b_id}/posts/${p_id}?key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log("Single Post", data);
    setPostData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchPostData();
  }, []);
  return (
    <Container>
      <Header className="bg-secondary" />
      {loading && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <Spinner />
        </div>
      )}
      {!loading && <PostDetail data={postData} />}
    </Container>
  );
}

export default Post;
