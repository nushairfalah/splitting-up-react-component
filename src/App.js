import React from "react";
import "./App.css";

/**
 * TODO: Please import the `RegularComponent` and `PureComponent`
 */
import PureComponent from './Components/PureComponent';
import RegularComponent from './Components/RegularComponent';

class App extends React.Component {
  /**
   * TODO: Please add a state to this component, the key is `name` and the initial value is `John`
   */
  state = {
    name: 'John',
    count: 0
  }

  clickHandler = () => {
    this.setState({
      name: 'John',
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div className="App">
        <button
          // TODO: Please update the value of state `name` to `John`
          onClick={this.clickHandler}
        >
          Update state
        </button>
        <p>{this.state.count}</p>
        {/* 
          TODO: Please attach the `RegularComponent` and `PureComponent` here
        */}
        <PureComponent name={this.state.name} />
        <RegularComponent name={this.state.name} />
      </div>
    );
  }
}

export default App;
