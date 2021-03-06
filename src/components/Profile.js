import React, { useContext } from "react"
import Todo from "./Todo.js"
import TodoList from "./TodoList.js"
import TodoForm from "./TodoForm.js"
import { UserContext } from "../context/UserProvider.js"

export default function Profile(){
  const { 
    user: {
      username
    }, 
    addTodo, 
    todos 
  } = useContext(UserContext)

  return(
    <div>
      <h1>Welcom {username}</h1>
      <h3>Add a Todo</h3>
      <TodoForm addTodo={addTodo}/>
      <h3>Your Todos</h3>
      <Todo todos={todos}/>
    </div>
  )
}