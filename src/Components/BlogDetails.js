import React from "react";
import Spinner from "./Spinner";
function BlogDetails(props) {
  return (
    <div className={`blog-section ${props.openDrawer ? "active" : ""}`}>
      <div className="blog-list-container">
        <div className="d-flex" style={{ borderBottom: "1px solid orange" }}>
          <p style={{ padding: "10px" }}>
            <b>All Blogs</b>
          </p>
          <button
            className="btn-close responsive-btn"
            onClick={() => props.setOpenDrawer(false)}
          >
            X
          </button>
        </div>
        {props.loading && (
          <div
            style={{ width: "300px", height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner width="50px" height="50px" />
          </div>
        )}
        {!props.loading && (
          <ul className="blog-list">
            {props?.blogs?.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  props.setActiveBlog({
                    title: item.name,
                    id: item.id,
                    postLink: item.posts.selfLink,
                  })
                }
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;
