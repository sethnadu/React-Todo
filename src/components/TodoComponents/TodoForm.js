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



    render() {
        return (
            <>
            <form onSubmit = {this.handleSubmit}>
                <input type="text" name="task" placeholder="Add Task" onChange = {this.handleChange} />
                <button onClick = {this.handleSubmit}>Add Todo</button>
            </form>
            <button>Clear Todo List</button>
            </>
        )
    }
}

export default TodoForm;