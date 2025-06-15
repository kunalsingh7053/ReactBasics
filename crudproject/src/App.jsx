import { useState } from "react";
import { nanoid } from 'nanoid';
import Create from "./components/Create";
import Read from "./components/Read";
import SplashCursor from "../Reactbit/SplashCursor/SplashCursor";
import TextPressure from "../Textanimation/TextPressure/TextPressure";
const App = () => {

  const [todos, settodos] = useState([
    {title:"kam kar le bhai",
      id:1,
      iscompleted:false
    }
  ])

 
  return (
    <div className="text-white flex flex-col w-screen h-screen bg-black p-3">
    <SplashCursor />
     <div className="h-[10%] sm:mb-[20px] md:mb-[40px] lg:mb-[60px] xl:[80px] 2xl:mb-[150px]">
    <TextPressure />
  </div>
    <div className="flex  h-[90%] ">
        <Create todos={todos} settodos={settodos} />
        <Read todos={todos} settodos={settodos} />
      </div>
    </div>
  )
}

export default App
