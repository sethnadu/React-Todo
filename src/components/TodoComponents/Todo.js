import React from "react";

const Todo = props => {
    // console.log(props)
    return (
        <div
            className = {`${props.item.completed ?  'completed'  : ''}`}
            onClick = {() => props.toggleTodo(props.item.id)}
           
         >
        <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;