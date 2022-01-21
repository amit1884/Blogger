import React from "react";
import "../assets/styles/formStyle.css";
function GetBlogForm(props) {
  return (
    <div className="form-container">
      <p>Get Blog</p>
      <form onSubmit={props.getBlog}>
        <label htmlFor="blogId">Blog ID</label>
        <br />
        <input type="text" placeholder="Blog Id or Blog Url" id="blogId" />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default GetBlogForm;
