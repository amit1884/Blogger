import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { months } from "../assets/helper/helper";
import Card from "./Card";

function SinglePost(props) {
  const { postData, postArray, setPosts } = props;
  const [deleting, setDeleting] = useState(false);

  const deletePost = async () => {
    setDeleting(true);

    const accessToken = Cookies.get("accessToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}${postData.blog.id}/posts/${postData.id}`,
        requestOptions
      );
      console.log(response.ok);
      setDeleting(false);

      let tempost = [...postArray];
      let idx = tempost.findIndex((item) => item.id);
      console.log(idx);
      tempost.splice(idx, 1);
      setPosts(tempost);
    } catch (err) {
      console.log(err);
      setDeleting(false);
      swal({
        icon: "warning",
        title: "Something went wrong",
      });
    }
  };
  return (
    <Card className="d-flex align-items-center responsive">
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
          <button className="btn-action btn-delete" onClick={deletePost}>
            {deleting ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
    </Card>
  );
}

export default SinglePost;
