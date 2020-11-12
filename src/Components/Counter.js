import React from "react";
class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <div>
        <h6> Counter </h6>
        <p> current count: {this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>increment the count</button>
      </div>
    );
  }
}

export default Counter;
