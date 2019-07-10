import React from "react";

import "./Button.css";

const Button = props => {
  return (
    <div
      className="basic-button"
      onClick={() => {
        props.onSend();
      }}
    >
      {props.text}
    </div>
  );
};

export default Button;
