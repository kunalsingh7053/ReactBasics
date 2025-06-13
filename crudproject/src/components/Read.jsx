import { useState } from "react";


const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
    const deletehandler =(id)=>{
        const filtertodo = todos.filter((todo)=>todo.id!=id);
        settodos(filtertodo);
    }
     const render = todos.map((todo)=>{
 return <li style={{color:todo.iscompleted?"green":"tomato"}} key={todo.id}>{todo.title}|<span onClick={()=>deletehandler(todo.id)}>Delete</span></li>
  })
  return (
    <>
        <h1 style={{color:"tomato"}}>Panding Todos</h1>
      <ul>{render}</ul>
    </>
  )
}

export default Read
