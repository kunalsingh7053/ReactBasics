import { useState } from "react";


const Creat = (props) => {
    console.log(props)
      const [fullname,setfullname] = useState("");
  const [age,setage] = useState(18);
    const formhandler = (e) =>{
      e.preventDefault();
      const newuser ={
        fullname,age
      }
      console.log(newuser)//api-backend-database
    };
  return (
    <div>
         <h1>Register Form</h1>
      <form onSubmit={formhandler}>
        <input
          value={fullname}
        onChange={(e)=>setfullname(e.target.value)} 
        type="text" placeholder="Enter Full Name" />
        <input 
         value={age}
        onChange={(e)=>setage(e.target.value)} 
        type="number" placeholder="Enter Age" min="1"/>
        <button>Submit</button>
      
      </form>
    </div>
  )
}

export default Creat
