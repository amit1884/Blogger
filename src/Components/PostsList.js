import React, { useState, useEffect } from "react";
import AddPostForm from "./Modals/AddPostForm";
import SinglePost from "./SinglePost";
import Spinner from "./Spinner";

function PostsList(props) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [postAdded, setPostAdded] = useState(false);
  const { activeBlog } = props;
  const fetchPost = async () => {
    setLoading(true);
    const response = await fetch(
      `${props.activeBlog.postLink}?key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log("posts : ", data);
    setPosts(data.items);
    setLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, [activeBlog, postAdded]);
  const openForm = () => {
    setOpen(true);
    setPostAdded(false);
  };
  return (
    <div className="posts-section">
      <div className="post-header d-flex justify-content-around align-items-center">
        <h2>{activeBlog.title}</h2>
        <button
          className="btn-action btn-add"
          style={{ width: "100px" }}
          onClick={openForm}
        >
          <span>+</span>&nbsp;&nbsp;Add Post
        </button>
      </div>
      {loading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="posts-list">
          {posts?.map((item) => {
            return <SinglePost postData={item} key={item.id} />;
          })}
        </div>
      )}

      {open && (
        <AddPostForm
          setOpen={setOpen}
          b_id={activeBlog.id}
          setPostAdded={setPostAdded}
        />
      )}
    </div>
  );
}

export default PostsList;
