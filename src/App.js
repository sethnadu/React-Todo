import React from 'react';
import TodoList from "./components/TodoComponents/TodoList.js";
import TodoForm from "./components/TodoComponents/TodoForm.js";
import "./components/TodoComponents/Todo.scss"

const todoListArray = [{
      task: "test",
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
      completed: false
    };
    this.setState({
      todoInfo: [...this.state.todoInfo, newTask]
      
    })
    // window.localStorage.setItem(newTask.id, JSON.stringify(taskName));
    //  return  window.localStorage.getItem(newTask.id) ? JSON.parse(window.localStorage.getItem(newTask.id)) : taskName;
     
  }

  findTask = task => {
    // console.log(this.state.todoInfo)
    // const todoInfoCopy = [...this.state.todoInfo]
    // const oldTodo = this.state.todoInfo.filter(item => item.task === task)
    // console.log(oldTodo)
    // console.log(todoInfoCopy)
    // console.log(this.state.todoInfo)
    this.setState({
          // todoInfo: oldTodo
      todoInfo: this.state.todoInfo.filter(item => {
        return item.task === task
        // if (item.task === task) {
        //   return item
        // } else if (!task) {
        //   return this.state.todoInfo
        // }
      
      }) 
      // if (oldTodo) {
      //   return oldTodo.item
      // } else if (!oldTodo) {
      //   return todoInfoCopy
      // }
    })
  }

  clearTasks = () => {
    this.setState({
      todoInfo: this.state.todoInfo.filter(item => {
        return (!item.completed)})
    });
  }



  render() {
    return (
      <div className = "todo">
        <h2 className = "mainTitle">Welcome to your Todo App!</h2>
        <TodoList todoInfo = {this.state.todoInfo} toggleTodo = {this.toggleTodo}/>
        <TodoForm addTask = {this.addTask} clearTasks = {this.clearTasks} findTask = {this.findTask}/>
      </div>
    );
  }
}

export default App;
