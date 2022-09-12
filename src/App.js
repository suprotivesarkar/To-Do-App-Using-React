import React from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

class App extends React.Component{
  state={
    items: []
  }
  addToTodo =(text)=>{
    this.setState({
      //concat - returns a new array
      items: this.state.items.concat(text)
    })
  }
  deleteFromTodo = (index) =>{
    let copyTodo = [...this.state.items]
    copyTodo.splice(index,1)
    this.setState({items: copyTodo})
  }
  render(){
  return (
    <div className="App">
      <TodoInput addToTodo={this.addToTodo}/>
      <TodoList items={this.state.items} deleteFromTodo={this.deleteFromTodo}/>
    </div>
  );
  }
}
export default App;
