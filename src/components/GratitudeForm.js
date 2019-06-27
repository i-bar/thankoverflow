import React, { Component } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { isInvalid, hasNegativeSentiment } from "../service/messageValidation";
import {
  NEGATIVE_SENTIMENT_MSG,
  INVALID_GRATITUDE_MSG
} from "../service/constants";

class GratitudeForm extends Component {
  state = {
    isInputBoxHidden: false, // Hidden while the animation is... animating :)
    message: ""
  };

  render() {
    return (
      <div>
        <form>
          <label>What are you grateful for today?</label>
          <InputBox
            hidden={this.state.isInputBoxHidden}
            message={this.state.message}
            updateMessage={this.updateMessage}
          />
          <Button text="Send!" onSend={this.trySubmitForm} />
        </form>
      </div>
    );
  }

  trySubmitForm = async () => {
    const anyNegativeSentiment = await hasNegativeSentiment(this.state.message);
    if (isInvalid(this.state.message)) {
      alert(INVALID_GRATITUDE_MSG);
    } else if (anyNegativeSentiment) {
      alert(NEGATIVE_SENTIMENT_MSG);
    } else {
      this.submitForm();
    }
  };

  submitForm = async () => {
    this.hideTextBox();

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
    } finally {
      this.clearMessage();
      this.showTextBox();
      this.props.fetchRandomGratitude();
    }
  };

  hideTextBox = () => {
    this.setState({
      isInputBoxHidden: true
    });
  };

  showTextBox = () => {
    const REQUIRED_ANIMATION_LAG = 1500;
    setTimeout(() => {
      this.setState({
        isInputBoxHidden: false
      });
    }, REQUIRED_ANIMATION_LAG);
  };

  updateMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  clearMessage = () => {
    this.setState({ message: "" });
  };
}

export default GratitudeForm;
