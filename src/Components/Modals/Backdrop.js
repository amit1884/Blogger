import React from "react";
import "../../assets/styles/backdrop.css";
function Backdrop(props) {
  return <div className="backdrop">{props.children}</div>;
}

export default Backdrop;
