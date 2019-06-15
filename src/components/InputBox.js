import React, { Component } from "react";
import Button from "./Button";
import ParticleEffectButton from "react-particle-effect-button";

class InputBox extends Component {
  state = {
    value: "",
    hidden: false
  };

  submitForm = async () => {
    try {
      await fetch("/api/gratitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: this.state.value })
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <ParticleEffectButton
          color="lightgrey"
          hidden={this.state.hidden}
          direction={this.randomDirection()}
          particlesAmountCoefficient={5}
          duration={500}
          easing="easeInSine"
          onComplete={this.resetForm}
        >
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className="input-box"
          />
        </ParticleEffectButton>
        <Button
          text="Submit Gratitude Message"
          submitForm={this.submitForm}
          triggerAnimation={this.triggerAnimation}
        />
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  triggerAnimation = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  };

  resetForm = () => {
    this.setState({ value: "", hidden: false });
  };

  randomDirection = () => {
    const randomFloat = Math.random();
    if (randomFloat <= 0.25) {
      return "left";
    } else if (randomFloat > 0.25 && randomFloat <= 0.5) {
      return "right";
    } else if (randomFloat < 0.5 && randomFloat <= 0.75) {
      return "top";
    } else {
      return "bottom";
    }
  };
}

export default InputBox;
