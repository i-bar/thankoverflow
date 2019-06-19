import React, { Component } from "react";
import InputBox from "./InputBox";
import Button from "./Button";

class GratitudeForm extends Component {
  state = {
    isMessageHidden: false, // Hidden while the animation is... animating :)
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
    } catch (err) {
      console.error(err);
    }

    this.props.inputSubmitted();
  };

  triggerAnimation = () => {
    this.setState({
      isMessageHidden: !this.state.isMessageHidden,
    });
  };

  onAnimationFinished = () => {
    this.state.isMessageHidden ? this.triggerAnimation() : this.submitForm();
  };

  render() {
    return (
      <div>
        <form>
          <label>What are you grateful for today?</label>
          <InputBox
            onComplete={this.onAnimationFinished}
            hidden={this.state.isMessageHidden}
          />
          {/* getRandomGratitude={this.props.getRandomGratitude} /> */}
          <Button text="Send!" onSend={this.triggerAnimation} />
        </form>
      </div>
    );
  }
}

export default GratitudeForm;
