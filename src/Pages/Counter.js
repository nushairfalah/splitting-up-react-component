import React from "react";
import { Link } from "react-router-dom";
class CounterPage extends React.Component {
  render() {
    return (
      <div>
        Counter Page
        <br />
        <Link to="/home">To Home Page</Link>
      </div>
    );
  }
}

export default CounterPage;
