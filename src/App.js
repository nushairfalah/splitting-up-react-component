import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./Pages/Profile";
import HomePage from "./Pages/Home";
import CounterPage from "./Pages/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/profile" component={ProfilePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/counter" component={CounterPage} />
        </Router>
      </div>
    );
  }
}

export default App;
