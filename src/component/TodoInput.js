import React, { Component } from 'react'

class TodoInput extends Component {
   state = {
         text: ''
      }
    inputHandler=(event)=>{
        this.setState({
            text: event.target.value
        })
    }
    clickHandler=()=>{
        if(this.state.text.trim()<=0){
            alert('Please type something!')
            return
        }
        this.props.addToTodo(this.state.text)
    }
    keyPressHandler=(e)=>{
        if( e.key === 'Enter'){
            this.clickHandler()
        }
    }
  render() {
    return (
      <div className='rowApp'>
        <h2 style={{textAlign: 'center', color: 'lightgrey'}}>To-Do App</h2>
        <input type='text' placeholder='Type a to-do!'
         value={this.state.text}
         onChange={this.inputHandler}
         onKeyPress={this.keyPressHandler} 
         style={{padding: '10px'}}/>
        <button style={{marginLeft: '10px', padding: '10px'}} onClick={this.clickHandler}>+Add</button>
      </div>
    )
  }
}

export default TodoInput