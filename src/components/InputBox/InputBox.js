import React, { Component } from "react";
import ParticleEffectButton from "react-particle-effect-button";
import { getRandomDirection } from "../../service/animationProps";
import "./InputBox.css";

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
        >
          <textarea
            value={this.props.message}
            onChange={this.props.updateMessage}
            className="input-box"
            id={this.props.isLoading ? "lighten-text" : ""}
          />
        </ParticleEffectButton>
      </div>
    );
  }
}

export default InputBox;
