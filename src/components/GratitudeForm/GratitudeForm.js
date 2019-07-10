import React, { Component } from "react";
import InputBox from "../InputBox/InputBox";
import Button from "../Button/Button";
import logo from "../../loading-icon.svg";
import {
  isInvalid,
  hasNegativeSentiment
} from "../../service/messageValidation";
import {
  NEGATIVE_SENTIMENT_MSG,
  INVALID_GRATITUDE_MSG
} from "../../service/constants";
import "./GratitudeForm.css";

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
          {this.state.isLoading && (
            <img src={logo} alt="spinning loader" id="loading-icon" />
          )}

          <Button text="Send!" onSend={this.trySubmitForm} />
        </form>
      </div>
    );
  }

  trySubmitForm = async () => {
    await this.toggleIsLoading();
    if (isInvalid(this.state.message)) {
      alert(INVALID_GRATITUDE_MSG);
      this.toggleIsLoading();
      return;
    } else if (await hasNegativeSentiment(this.state.message)) {
      // comment out this entire else-if-block to remove the latency that comes with sentiment analysis
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
