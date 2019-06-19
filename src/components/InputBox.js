import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import { getRandomDirection } from "../service/animationProps";

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
          direction={getRandomDirection()}
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
}

export default InputBox;
