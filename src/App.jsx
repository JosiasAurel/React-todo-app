import React, {useState} from "react"
import Todo from "./Todo"
import "./app.css"

const App = () => {
    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrent] = useState("")
    //listening to input
    function handleInputChange(event) {
        setCurrent(event.target.value)
        return
    }

    //listen to form submit
    function handleFormSubmit(event) {
        event.preventDefault()
        setTodos([...todos, currentTodo])
        setCurrent("") // clear the input field
        return
    }

    return (
        <div>
            <h1>React Todo App</h1>
            <form onSubmit={handleFormSubmit}> 
                <input type="text" value={currentTodo} onChange={handleInputChange} />
            </form>
            <ul>
                {todos.map(todo => {
                    return <Todo name={todo} />
                })}
            </ul>
        </div>
    )
}

export default App