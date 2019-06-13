import React, { Component } from "react";
import Button from "./Button";
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
          <Button text="Submit Gratitude Message" />
        </form>
      </div>
    );
  }
}

export default GratitudeForm;
