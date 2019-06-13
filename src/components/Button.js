import React from "react";

const Button = props => {
  return (
    <div className="basic-button" onClick={props.submitForm}>
      {props.text}
    </div>
  );
};

export default Button;
