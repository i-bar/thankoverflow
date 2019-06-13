import React, { Component } from "react";

class InputBox extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          className="input-box"
        />
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
