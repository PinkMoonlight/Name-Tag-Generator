import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };

  componentDidMount() {
    let savedNameString = localStorage.getItem("savedNames");
    if (savedNameString) {
      let savedState = JSON.parse(savedNameString);
      this.setState({ names: savedState });
    }
  }

  componentDidUpdate() {
    let savedNameString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNameString);
  }

  addName = inputName => {
    var newNames = [inputName, ...this.state.names];
    this.setState({ names: newNames });
  };

  removeName = clickedIndex => {
    var filterCallback = (_, index) => index !== clickedIndex;
    var newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  render() {
    return (
      <div className="App">
        <UserInput addName={this.addName} />
        <h1>Name Tag Generator</h1>
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
