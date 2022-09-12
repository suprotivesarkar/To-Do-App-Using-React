import React, { Component } from 'react'

const pStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    marginTop: '10px',
    padding: '0 10px 0 10px'
}
class TodoItem extends Component {
    strikeHandler=(event)=>{
        if(event.target.style.textDecoration){
            event.target.style.removeProperty('text-decoration')
        }
        else{
            event.target.style.setProperty('text-decoration', 'line-through')
        }
    }
  render() {
    return (
      <div className='rowApp' style={pStyle}>
        <p onClick={this.strikeHandler} onDoubleClick={()=>this.props.deleteFromTodo(this.props.index)}>
            {this.props.index+1}. {this.props.item} 
        </p>
        <button onClick={()=>this.props.deleteFromTodo(this.props.index)} 
        style={{marginLeft: '20px'}}>
            Delete
            </button>
      </div>
    )
  }
}

export default TodoItem