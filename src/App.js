import './styles/App.css'
import React from 'react'
import Todo from './Todo'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ' ',
      todos: [
        {
          name: 'One',
          done: true,
        },
        {
          name: 'Two',
          done: false,
        },
      ],
    }
  }
  render() {
    return (
      <div>
        <h1>To do</h1>
        <div className="inputPosition">
          <input
            className="todoSection"
            value={this.state.name}
            onChange={this.handleSetName}
          />
          <button className="saveButton" onClick={this.handleAddTodo}>
            Add
          </button>
        </div>
        {this.state.todos.map((todo, id) => (
          <div className="todoList">
            <Todo
              name={todo.name}
              done={todo.done}
              id={id}
              onDone={this.handleSetDone}
              onRemove={this.handleRemoveTodo}
            ></Todo>
          </div>
        ))}
      </div>
    )
  }

  handleSetName = (e) => {
    this.setState({ name: e.target.value })
  }

  handleAddTodo = () => {
    if (this.state.name === '') {
      alert("Mistake, you can't enter empty todo's element")
      return
    }
    if (!this.state.name.trim()) {
      alert('Mistake, no spaces')
      return
    }
    const todo = {
      name: this.state.name,
      done: false,
    }

    this.setState({
      name: ' ',
      todos: this.state.todos.concat([todo]),
    })
  }

  handleRemoveTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== id),
    })
  }

  handleSetDone = (done, name) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.name === name ? { name, done } : todo
      ),
    })
  }
}

export default App
