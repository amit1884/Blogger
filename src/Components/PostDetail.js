import React, { useState } from "react";
import { months } from "../assets/helper/helper";
import Comments from "./Comments";

function PostDetail(props) {
  const { data } = props;
  const [showComment, setShowComment] = useState(false);
  function createMarkup(text) {
    return { __html: text };
  }
  return (
    <div className="post-main-container">
      <div className="post-header d-flex justify-content-around align-items-center">
        <p>
          <b>Author : </b>
          {data?.author.displayName}
        </p>
        <p style={{ fontSize: "15px" }}>
          ({months[new Date(data?.published).getMonth()]}
          {"' "}
          {new Date(data?.published).getDate()})
        </p>
      </div>
      <div className="post-desc">
        <div>
          <h2 className="text-primary">
            <u>{data?.title}</u>
          </h2>
        </div>
        <p dangerouslySetInnerHTML={createMarkup(data?.content)} />
        <br />
        <div>
          <button
            className="btn-action btn-add d-flex align-items-center justify-content-center"
            style={{ width: "200px" }}
            onClick={() => setShowComment(!showComment)}
          >
            {" "}
            Comments&nbsp;&nbsp;
            <span>&#8680;</span>
          </button>
        </div>
        {showComment && <Comments commentLink={data?.replies?.selfLink} />}
      </div>
    </div>
  );
}

export default PostDetail;
