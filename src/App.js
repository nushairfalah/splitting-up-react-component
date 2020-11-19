import React from "react";
import "./App.css";
import PureComponent from "./Components/PureComponent";
import RegularComponent from "./Components/RegularComponent";
class App extends React.Component {
  state = {
    name: "John",
  };

  render() {
    console.log("*** Parent component render ****");
    return (
      <div className="App">
        <button onClick={() => this.setState({ name: "John" })}>Update state</button>
        <RegularComponent name={this.state.name} />
        <PureComponent name={this.state.name} />
      </div>
    );
  }
}

export default App;
