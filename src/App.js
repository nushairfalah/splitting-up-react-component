import React from "react";
import "./App.css";
import TodoListPage from "./Pages/TodoList";
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoListPage />
      </div>
    );
  }
}

export default App;
