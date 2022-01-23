import React, { useState, useEffect } from "react";
import SingleComment from "./SingleComment";
import Spinner from "./Spinner";

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchComments = async () => {
    setLoading(true);
    const response = await fetch(
      `${props.commentLink}?key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setComments(data.items);
    setLoading(false);
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div className="comments-container">
      <form className="comment-form">
        <input type="text" placeholder="Enter Your comments here" />
        <button className="btn-action btn-add">Send</button>
      </form>
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner width="50px" height="50px" />
        </div>
      )}
      {!loading && comments?.length === 0 && <p>No Comments Found</p>}

      {!loading && (
        <div className="comment-list">
          {comments?.map((items, index) => {
            return <SingleComment data={items} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
