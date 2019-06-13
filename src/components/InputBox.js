import React, { Component } from "react";
import Button from "./Button";

class InputBox extends Component {
  state = {
    value: "",
  };

  submitForm = async () => {
    try {
      await fetch("/api/gratitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: this.state.value }),
      });

      this.setState({ value: "" });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          className="input-box"
        />
        <Button text="Submit Gratitude Message" submitForm={this.submitForm} />
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
}

export default InputBox;
