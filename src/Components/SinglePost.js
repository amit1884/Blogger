import React from "react";
import { Link } from "react-router-dom";
import { months } from "../assets/helper/helper";
import Card from "./Card";

function SinglePost(props) {
  const { postData } = props;
  return (
    <Card className="d-flex align-items-center">
      <div className="post-thumbnail d-flex justify-content-center align-items-center">
        <img src={postData.author.image.url} alt="" />
      </div>
      <div className="post-content">
        <h2>{postData.title ? postData.title : "Untitled"}</h2>
        <br />
        <p className="text-tiny m-10">
          <span>
            <b>Published :</b>{" "}
          </span>
          <span>
            {months[new Date(postData.published).getMonth()]}'&nbsp;
            {new Date(postData.published).getDate()}
          </span>
        </p>
        <p className="text-tiny m-10">
          <span>
            <b>Updated :</b>{" "}
          </span>
          <span>
            {months[new Date(postData.updated).getMonth()]}'&nbsp;
            {new Date(postData.updated).getDate()}
          </span>
        </p>
      </div>
      <div className="post-action d-flex justify-content-center flex-column">
        <Link to={`/post/${postData.blog.id}/${postData.id}`}>
          <button className="btn-action btn-view">View</button>
        </Link>
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
