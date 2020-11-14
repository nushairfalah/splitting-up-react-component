import React from "react";
import "./App.css";
import CounterHooks from "./Components/CounterHooks";
import CounterHooksClone from "./Components/CounterHooksClone";

class App extends React.Component {
  state = {
    showCounter: false,
  };

  render() {
    return (
      <div className="App">
        <h1> Example of React LifeCycle</h1>
        <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}>{this.state.showCounter ? "Hide Counter" : "Show Counter"}</button>
        {this.state.showCounter && <CounterHooksClone />}
      </div>
    );
  }
}

export default App;
