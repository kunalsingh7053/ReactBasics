import { useState } from "react";
import { nanoid } from 'nanoid';
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {

  const [todos, settodos] = useState([
    {title:"kam kar le bhai",
      id:1,
      iscompleted:false
    }
  ])

 
  return (
    <div>
   <Create todos={todos} settodos={settodos}/>
      <hr />
    <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App
