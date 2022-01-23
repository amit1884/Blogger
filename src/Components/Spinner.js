import React from "react";

function Spinner(props) {
  return (
    <div
      className="loader"
      style={{ width: props?.width, height: props?.height }}
    ></div>
  );
}

export default Spinner;
