import React, { Component } from "react";
import GratitudeForm from "./components/GratitudeForm";
import Gratitude from "./components/Gratitude";

import "./App.css";

class App extends Component {
  state = {
    randomGratitude: "",
  };

  render() {
    return (
      <div>
        <h1>Thank Overflow</h1>
        <GratitudeForm inputSubmitted={this.getRandomGratitude} />
        <Gratitude message={this.state.randomGratitude} />
      </div>
    );
  }

  getRandomGratitude = () => {
    fetch("/api/gratitude")
      .then(response => response.json())
      .then(gratitudes =>
        this.setState({
          randomGratitude: gratitudes
            .map(g => g.message)
            .reduce((acc, message) => message + "; " + acc, ""),
        })
      );
  };
}

export default App;
