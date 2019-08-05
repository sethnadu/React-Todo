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

    handleRemove = event => {
        event.preventDefault();
        this.props.clearTasks();
    }

    render() {
        return (
            <>
            <form onSubmit = {this.handleSubmit}>
                <input type="text" name="task" placeholder="Add Task" value={this.state.task} onChange = {this.handleChange} />
                <button onClick = {this.handleSubmit}>Add Todo</button>
            </form>
            <button onClick = {this.handleRemove}>Clear Todo List</button>
            </>
        )
    }
}

export default TodoForm;