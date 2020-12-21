import React from "react"
import "./todo.css"

const Todo = ({name}) => {
    return (
        <li>
            <h3>{name}</h3>
        </li>
    )
}

export default Todo