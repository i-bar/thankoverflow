import React, { Component } from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import { isInvalid } from "../service/messageValidation";
import { isToxic } from "../service/toxicityService";
import {
  NEGATIVE_SENTIMENT_MSG,
  INVALID_GRATITUDE_MSG,
  LOADING_MSG
} from "../service/constants";

class GratitudeForm extends Component {
  state = {
    isInputBoxHidden: false, // Hidden while the animation is... animating :)
    message: "",
    isLoading: false
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
            isLoading={this.state.isLoading}
          />
          {this.state.isLoading && <p id="loading-icon">{LOADING_MSG}</p>}

          <Button text="Send!" onSend={this.trySubmitForm} />
        </form>
      </div>
    );
  }

  trySubmitForm = async () => {
    await this.toggleIsLoading();
    const messageIsToxic = await isToxic(this.state.message);
    if (isInvalid(this.state.message)) {
      alert(INVALID_GRATITUDE_MSG);
      this.toggleIsLoading();
      return;
    } else if (messageIsToxic) {
      alert(NEGATIVE_SENTIMENT_MSG);
      this.toggleIsLoading();
      return;
    } else {
      this.submitForm();
      this.toggleIsLoading();
    }
  };

  toggleIsLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
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
    const REQUIRED_ANIMATION_LAG = 1;
    setTimeout(() => {
      this.setState({
        isInputBoxHidden: true
      });
    }, REQUIRED_ANIMATION_LAG);
  };

  showTextBox = () => {
    const REQUIRED_ANIMATION_LAG = 2000;
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
