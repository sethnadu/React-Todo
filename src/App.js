import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import { objectMethod } from '@babel/types';

const todoListArray = [{
      task: "placeholder",
      id: Date.now(),
      completed: false
},]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoInfo: todoListArray
    };

  }

  toggleTodo = id => {
    
    this.setState({
    todoInfo: this.state.todoInfo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
    })
   }) 
  };


  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todoInfo: [...this.state.todoInfo, newTask]
    })
  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoInfo = {this.state.todoInfo} toggleTodo = {this.toggleTodo}/>
        <TodoForm addTask = {this.addTask}/>
      </div>
    );
  }
}

export default App;
