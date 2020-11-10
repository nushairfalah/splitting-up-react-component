import React from "react";
class TodoListPage extends React.Component {
  state = {
    todos: [{ text: "Learn about React" }, { text: "Meet friend for lunch" }, { text: "Build really cool todo app" }],
    newValue: "",
  };

  setTodos = (todos) => this.setState({ todos });

  addTodo = (text) => {
    const newTodos = this.state.todos.concat({ text });
    this.setTodos(newTodos);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.newValue) return;
    this.addTodo(this.state.newValue);
    this.setState({
      newValue: "",
    });
  };

  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map((todo, index) => (
          <div className="todo">{todo.text}</div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            value={this.state.newValue}
            onChange={(e) =>
              this.setState({
                newValue: e.target.value,
              })
            }
          />
        </form>
      </div>
    );
  }
}

export default TodoListPage;
