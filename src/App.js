import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfilePage from "./Pages/Profile";
import HomePage from "./Pages/Home";
import CounterPage from "./Pages/Counter";
import RoutePage from './Pages/Route';
import QueryPage from './Pages/Query';
import HashPage from './Pages/Hash';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/profile/:name" component={ProfilePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/counter" component={CounterPage} />

          {/* Tugas */}
          <Route path='/route-params/:name' component={RoutePage} />
          <Route path='/query-params' component={QueryPage} />
          <Route path='/hash-params' component={HashPage} />
        </Router>
      </div>
    );
  }
}

export default App;
