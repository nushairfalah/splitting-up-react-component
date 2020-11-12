import React from "react";
let timeout;
class Counter extends React.Component {
  state = {
    count: 0,
    loading: true,
    timeOut: undefined,
  };

  componentDidMount() {
    console.log("component mounted");
    // this is just an example of loading content
    timeout = setTimeout(() => {
      this.setState({
        loading: false,
      });
      console.log("data updated");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component unmounted");
    clearTimeout(timeout);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
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
