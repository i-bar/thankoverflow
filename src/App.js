import React, { Component } from "react";
import GratitudeForm from "./components/GratitudeForm";
import Gratitude from "./components/Gratitude";

import "./App.css";

class App extends Component {
  state = {
    randomGratitude: ""
  };

  render() {
    return (
      <div>
        <h1>Thank Overflow</h1>
        <GratitudeForm getRandomGratitude={this.getRandomGratitude} />
        <Gratitude message={this.state.randomGratitude} />
      </div>
    );
  }

  getRandomGratitude = () => {
    this.setState({
      randomGratitude: `Random gratitude #${Math.floor(Math.random() * 100)}`
    });
  };
}

export default App;
