import { useState } from "react"
import Creat from "./components/Creat"
import Read from "./components/Read"
const App = () => {
 
 const[users,setuser] = useState([
  {name:"kunal",age:20},
  {name:"ram",age:21},
  {name:"krish",age:22},
 ])

  
  return (
    <div>
   <Creat/>
   <hr />
   <Read users={users} setuser={setuser}/>
   {/*jsx function call*/}
    {/* Read(users,setusers) */}
   
    </div>
  )
}

export default App
