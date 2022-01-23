import React from "react";
import Card from "./Card";

function SinglePost(props) {
  return (
    <Card className="d-flex align-items-center">
      <div className="post-thumbnail"></div>
      <div className="post-content">
        <h2>Post Title</h2>
        <br />
        <p>
          <span>Published on :</span>
          <span></span>
        </p>
        <p>
          <span>Updated on :</span>
          <span></span>
        </p>
      </div>
      <div className="post-action d-flex justify-content-center flex-column">
        <div>
          <button className="btn-action btn-view">View</button>
        </div>
        <div>
          <button className="btn-action btn-edit">Edit</button>
        </div>
        <div>
          <button className="btn-action btn-delete">Delete</button>
        </div>
      </div>
    </Card>
  );
}

export default SinglePost;
