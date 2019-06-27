import React, { Component } from "react";
import InputBox from "./InputBox";
import Button from "./Button";

class GratitudeForm extends Component {
  state = {
    isMessageHidden: false, // Hidden while the animation is... animating :)
    message: ""
  };

  submitForm = async () => {
    try {
      await fetch("/api/gratitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: this.state.message })
      });
    } catch (err) {
      console.error(err);
    }

    this.props.inputSubmitted();
  };

  triggerSubmissionSequence = () => {
    this.setState({
      isMessageHidden: !this.state.isMessageHidden
    });
  };

  onAnimationFinished = () => {
    this.state.isMessageHidden
      ? this.triggerSubmissionSequence()
      : this.submitForm();
  };

  updateMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  clearMessage = () => {
    this.setState({ message: "" });
  };

  render() {
    return (
      <div>
        <form>
          <label>What are you grateful for today?</label>
          <InputBox
            onComplete={this.onAnimationFinished}
            hidden={this.state.isMessageHidden}
            message={this.state.message}
            updateMessage={this.updateMessage}
            clearMessage={this.clearMessage}
          />
          <Button text="Send!" onSend={this.triggerSubmissionSequence} />
        </form>
      </div>
    );
  }
}

export default GratitudeForm;
