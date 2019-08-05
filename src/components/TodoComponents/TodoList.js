// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo.js";

function TodoList(props) {

    return (
        <>
            {props.todoInfo.map(item => (
                <Todo key={item.id} item ={item} toggleTodo = {props.toggleTodo} />
            ))}
        </>
    )
}

export default TodoList;