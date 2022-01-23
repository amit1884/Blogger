import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";

function PostsList(props) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {}, []);
  return (
    <div className="posts-section">
      <div className="post-header d-flex justify-content-around align-items-center">
        <h2>{props.activeBlog.title}</h2>
        <button className="btn-action btn-add" style={{ width: "100px" }}>
          <span>+</span>&nbsp;&nbsp;Add Post
        </button>
      </div>
      <div className="posts-list">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
}

export default PostsList;
