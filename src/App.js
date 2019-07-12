import React, { Component } from "react";
import GratitudeForm from "./components/GratitudeForm/GratitudeForm";
import Gratitude from "./components/Gratitude/Gratitude";

import "./App.css";

class App extends Component {
  state = {
    randomGratitude: ""
  };

  render() {
    return (
      <div>
        <h1>Thank Overflow</h1>
        <GratitudeForm fetchRandomGratitude={this.fetchRandomGratitude} />
        <Gratitude message={this.state.randomGratitude} />
      </div>
    );
  }

  fetchRandomGratitude = () => {
    fetch("/api/gratitude")
      .then(response => response.json())
      .then(gratitude => {
        this.setState({
          randomGratitude: gratitude.message
        });
      });
  };
}

export default App;
