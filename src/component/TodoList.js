import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends Component {
  render() {
    return (
      <div>
        {
            this.props.items.map((item,index)=>
            <TodoItem item={item}
            key={index}
            index={index}
            deleteFromTodo={this.props.deleteFromTodo}
              />)
        }
      </div>
    )
  }
}

export default TodoList