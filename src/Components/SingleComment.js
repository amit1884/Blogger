import React from "react";
import { months } from "../assets/helper/helper";
function SingleComment(props) {
  const { data } = props;
  return (
    <div className="single-comment-wrapper">
      <div className="comment-header d-flex align-items-center">
        <img
          src="http://www.blogger.com/img/blogger_logo_round_35.png"
          alt=""
          style={{ marginRight: "20px", width: "30px", height: "30px" }}
        />
        <p className="comment-author-info d-flex">
          {data?.author?.displayName}
        </p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <p className="comment-author-info" style={{ float: "right" }}>
          Update :&nbsp;{months[new Date(data?.updated).getMonth()]}
          {"' "}
          {new Date(data?.updated).getDate()}
        </p>
      </div>
      <div className="comment-content">
        <p>{data?.content}</p>
      </div>
    </div>
  );
}

export default SingleComment;
