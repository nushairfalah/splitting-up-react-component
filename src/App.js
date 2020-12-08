import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import ProfilePage from "./Pages/Profile";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/home" component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
        </Router>
      </div>
    );
  }
}

export default App;
