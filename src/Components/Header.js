import React from "react";
import "../assets/styles/headerStyle.css";
function Header(props) {
  return (
    <div
      className={`header-container d-flex align-items-center justify-content-around ${
        props.className ? props.className : ""
      }`}
    >
      <div className="brand">
        <p>Blogger</p>
      </div>
      <div className="links"></div>
    </div>
  );
}

export default Header;
