import React, { useState } from 'react'


const App = () => {
  let n = 12;
  let s = "kunal";
  let boo = false;
 let nu = null;
 let un = undefined;
 let arr = [<h1>hellow this is h1</h1>,1,2.2,"hellow"]
 let obj = {
  name:"kunal",age:20
 }
//  json data
 const profiles = [
  {name:"kunal",age:20},
  {name:"gopal",age:21},
  {name:"vinayak",age:19},
 ];
 const updatedprofiles = profiles.map((value,index)=>{
  return (
  <li key={index}>
    <span>name{value.name}</span><br></br>
    <small>age{value.age}</small>
  </li>
  )
 })
 const [count,setcount] = useState(0);
 const increase =()=>{
      setcount(count+1);//counsole ko function ke bhar likho kyo ki ye jo usestate hai ye asynchoronous code hai.
      
    }
    console.log(count);
    
const [isfollow,setisfollow] = useState(false);
const handletoggle = () =>{
  setisfollow(prev=>!prev);
}
  return (
    <div>
      <h1>Datatypes</h1>
      <h1>number:{n}</h1>
      <h1>string:{s}</h1>
      <h1>bolean:{boo?"hellow":"not hellow"}</h1>
      <h1>null:{nu}</h1>
      <h1>undefined:{un}</h1>
      <h1>array: {arr.map((item, index) => (
  <span key={index}>{String(item)} | </span>
))}</h1>

      <h1>object:{obj.name}|{obj.age}</h1>
      <ol>
        {updatedprofiles}
      </ol>
      <h1>count:{count}</h1>
      <button onClick={increase}>Increase</button>
      <p style={{color:isfollow?"white":"red"}}>{isfollow?"hellow":"not hellow"}</p>
      <button onClick={handletoggle} style={{          backgroundColor: isfollow ? '#ff4d4f' : '#4CAF50'
}}>{isfollow?"Follow":"Unfollow"}</button>
    </div>
  )
}

export default App

