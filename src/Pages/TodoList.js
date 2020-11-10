import React from "react";
import Todo from "../Components/Todo";
import TodoForm from "../Components/TodoForm";
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
          <Todo todo={todo} />
        ))}
        <TodoForm
          onSubmit={this.handleSubmit}
          onValueChange={(value) =>
            this.setState({
              newValue: value,
            })
          }
          value={this.state.newValue}
        />
      </div>
    );
  }
}

export default TodoListPage;
