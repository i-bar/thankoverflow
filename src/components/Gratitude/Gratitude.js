import React from "react";
import "./Gratitude.css";

const Gratitude = props => {
  if (props.message)
    return (
      <div className="gratitude-wrapper">
        <label>And somebody else is grateful for...</label>
        <div className="gratitude">{props.message}</div>
      </div>
    );
  else return "";
};

export default Gratitude;
