import { useState } from "react";
import { nanoid } from 'nanoid';

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
      const [title, settitle] = useState("")

      const submithandler =(e)=>{
e.preventDefault();

  if (title.trim() === "") {
    alert("Please enter a todo before submitting.");
    return;
  }
const newtodos ={
  id:nanoid(),
  title,
  iscompleted:false
}
settodos([...todos,newtodos])
console.log(todos);
settitle("");
  }
 
  return (
    <>
         <h1>Create Your Todo</h1>
      <form onSubmit={submithandler}>
        
        <input
        value={title}
        onChange={(e)=>settitle(e.target.value)}
        type="text" />
        <button type="submit">Creat</button>
        <button type="button" onClick={() => settodos([])}>Clear All</button>

      </form>
    </>
  )
}

export default Create
