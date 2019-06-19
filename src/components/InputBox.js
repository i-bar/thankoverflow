import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";

class InputBox extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <ParticleEffectButton
          color="lightgrey"
          hidden={this.props.hidden}
          direction={this.getRandomDirection()}
          particlesAmountCoefficient={5}
          duration={500}
          easing="easeInSine"
          onComplete={this.onAnimationComplete}
        >
          <textarea
            value={this.state.message}
            onChange={this.onTextChange}
            className="input-box"
          />
        </ParticleEffectButton>
      </div>
    );
  }

  onTextChange = event => {
    this.setState({
      message: event.target.value,
    });
  };

  onAnimationComplete = () => {
    this.setState({ message: "" });
    this.props.onComplete();
  };

  getRandomDirection = () => {
    const randomFloat = Math.random();
    if (randomFloat <= 0.25) {
      return "left";
    } else if (randomFloat > 0.25 && randomFloat <= 0.5) {
      return "right";
    } else if (randomFloat > 0.5 && randomFloat <= 0.75) {
      return "top";
    } else {
      return "bottom";
    }
  };
}

export default InputBox;
