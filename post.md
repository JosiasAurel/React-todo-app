## Build and host a Todo App with React and stormkit

Hey guys! In this tutorial, i am going to show you how to build and host a todo app made in react on stormkit.
Get your machine ready and let's start.

First things first, make sure you have NodeJS installed on your computer. I will recommend having Node 12 and above.

Scaffold a new react app with the `create-react-app` CLI as such.
```shell
npx create-react-app todo-app
```
Next, open your favorite IDE and let's code.

To make sure everything works ok, type `npm run start` in the location you created your react app. It should open your browser (otherwise, open `[localhost:3000](localhost:3000)`) and you should see the react logo rotating on your screen.

I want you to delete all the files in the `src` folder. We are going to start from scratch.

First create a file called `index.js` in the src folder and add the following code.
```jsx
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"))
```
Save the file and you should see `Hello World` in your browser.
Now create a file called `Todo.jsx` in the src folder and let's create the card that will make up a Todo in our app.

```jsx
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
```
Here, we are creating a basic component. It's a react hook (function component) that contains a list element as the base and contains the name of the todo we extract from its `props`. Notice we extract the name props in particular, here, we are making use of the destructuring syntax in ES6.
We see the component contains a stylesheet name `todo.css`. But we have not created that yet. Let's do this.

Create a new file name `todo.css` in the same directory as the todo component and add the follwing code in it. It's a pretty simple style.
```css
li {
    box-sizing: border-box;
    font-family: monospace;
    padding: 4px;
    margin: 1em;
    box-shadow: 0 0 4px 4px rgba(245, 245, 245, 0.466);
    border-radius: 5px;
    text-align: center;
}
```
Let use now create the functional component.
Create a file called `App.jsx` in the root of src folder and add the following
```jsx
import React, {useState} from "react"
import Todo from "./Todo"

const App = () => {
    const [todos, setTodos] = useState(["Eat", "Sleep"])
    return (
        <div>
        <ul>
                {todos.map(todo => {
                    return <Todo name={todo} />
                })}
            </ul>
        </div>
    )
}

export default App
```
The code above is the base of out todo app. We import the `useState` hook from react and make use of it to store some todos. 
The component return a div containing an unordered list. We make use the of the earlier imorted `Todo` component and render their content by iterating through them and returning a Todo with the corresponding value. We are using the JavaScript Array map function.

Let's now add ability to create a todo.
Add the following after the line we made use of the `useState` hook.
```jsx
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
```
Here we create two functions that will handle input and submit process.
The first one will listen to every key press and update the input accordingly.
The second will add the input to the current todo list and clear the input.

Let's add the form
```jsx
 <form onSubmit={handleFormSubmit}> 
                <input type="text" value={currentTodo} onChange={handleInputChange} />
            </form>
```
Add the above code after the div containing our app. We have set the value of the input field to `currentTodo` in our state and listen to every input change using our earlier created function. We also listen to the submit event of our form using our `handleFormSubmit` function.

Your code for the `App.jsx` component should look as such now.
```jsx
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
```
We have exported our app and added a big h1 to name our app. We have also remove the sample todos from the todos states.

We have some styles imported, which we have not created yet. Create a file called `app.css` and add the following styles to it.

```css
* {
    box-sizing: border-box;
}

h1 {
    text-align: center;
}

body {
    font-family: monospace;
    background-color: hotpink;
}

ul {
    list-style-type: none;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    padding: 4px;
    border-radius: 4px;
    border: solid;
    border-color: transparent;
}
```
Update `index.js` to look as such too
```jsx
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
```

Reload your browser and everything should be working fine. You can write anything and press enter. This will add a new todo to your list and clear the input for you so you can create more.

We have built a functional todo app in react. It's time to host it.

We are going to use stormkit to do so. 
Head over to [stormkit](https://www.stormkit.io/) and create an account if you do not have one yet.