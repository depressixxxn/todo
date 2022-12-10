import React from 'react'
import './styles/Todo.css'

export default class Todo extends React.Component {
  render() {
    const { done, name } = this.props
    return (
      <div className={done ? 'done' : ''} id="todosElement">
        <input type="checkbox" checked={done} onChange={this.handleCheck} />
        <span>{name}</span>
        <button
          className="removeButton"
          onClick={() => this.props.onRemove(this.props.id)}
        >
          Delete
        </button>
      </div>
    )
  }
  handleCheck = (e) => {
    const done = e.target.checked
    this.props.onDone(done, this.props.name)
  }
}
