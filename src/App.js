import React from "react";
import "./App.css";
import PureComponent from "./Components/PureComponent";
import RegularComponent from "./Components/RegularComponent";
class App extends React.Component {
  state = {
    name: "John",
    count: 0,
  };

  render() {
    console.log("*** Parent component render ****");
    return (
      <div className="App">
        <p> {this.state.count} </p>
        <button onClick={() => this.setState({ name: "John", count: this.state.count + 1 })}>Update state</button>
        <RegularComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </div>
    );
  }
}

export default App;
