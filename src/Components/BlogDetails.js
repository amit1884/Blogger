import React from "react";

function BlogDetails(props) {
  return (
    <div className="blog-section">
      <div className="blog-list-container">
        <p style={{ borderBottom: "1px solid orange", padding: "10px" }}>
          <b>All Blogs</b>
        </p>
        <ul className="blog-list">
          {props?.blogs?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogDetails;
