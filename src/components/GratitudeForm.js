import React, { Component } from "react";
import InputBox from "./InputBox";

class GratitudeForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            What are you grateful for?
            <InputBox />
          </label>
        </form>
      </div>
    );
  }
}

export default GratitudeForm;
