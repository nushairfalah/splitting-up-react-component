import React from "react";
import "./App.css";
/**
 * TODO: Please import the `RegularComponent` and `PureComponent`
 */
class App extends React.Component {
  /**
   * TODO: Please add a state to this component, the key is `name` and the initial value is `John`
   */

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            // TODO: Please update the value of state `name` to `John`
          }}
        >
          Update state
        </button>

        {/* 
          TODO: Please attach the `RegularComponent` and `PureComponent` here
        */}
      </div>
    );
  }
}

export default App;
