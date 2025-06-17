import React, { createContext } from 'react'
import { useState } from "react";

export const todocontext = createContext(null);
const Wrapper = (props) => {
    const [todos, settodos] = useState([
    {title:"kam kar le bhai",
      id:1,
      iscompleted:false
    }
  ])

  console.log(props.children)
  return <todocontext.Provider value={[todos, settodos]}>{props.children}</todocontext.Provider> 
}

export default Wrapper
