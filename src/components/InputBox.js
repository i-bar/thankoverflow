import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import { getRandomDirection } from "../service/animationProps";

class InputBox extends Component {
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
            value={this.props.message}
            onChange={this.props.updateMessage}
            className="input-box"
          />
        </ParticleEffectButton>
      </div>
    );
  }

  onAnimationComplete = () => {
    this.props.onComplete();
  };
}

export default InputBox;
