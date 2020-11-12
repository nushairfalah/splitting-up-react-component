import React from "react";
import "./App.css";
import Counter from "./Components/Counter";

class App extends React.Component {
  state = {
    showCounter: false,
  };

  render() {
    return (
      <div className="App">
        <h1> Our App</h1>
        <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}>{this.state.showCounter ? "Hide Counter" : "Show Counter"}</button>
        {this.state.showCounter && <Counter />}
      </div>
    );
  }
}

export default App;
