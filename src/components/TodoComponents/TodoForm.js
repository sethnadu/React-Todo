import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
       
    }

    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
         event.preventDefault();
         this.props.addTask(this.state.task);
   
    }

    handleFind = event => {
        event.preventDefault();
        this.props.findTask(this.state.task);
        
    }

    handleRemove = event => {
        event.preventDefault();
        this.props.clearTasks();
    }




    render() {
        return (
            <>
           
            <form className = "form" onSubmit = {this.handleSubmit}>
                <input className = "formInput" type="text" name="task" placeholder="Add Task" value={this.state.task} onChange = {this.handleChange} />
                <button className = "addButton" onClick = {this.handleSubmit}>Add Todo</button>
            </form>
            <button className = "searchButton" onClick = {this.handleFind}>Search for Task</button>
            <button className = "clearButton" onClick = {this.handleRemove}>Clear Completed</button>
            
            </>
        )
    }
}

export default TodoForm;