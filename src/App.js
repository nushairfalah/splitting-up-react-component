import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
