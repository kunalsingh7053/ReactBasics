import { useState } from "react"


const App = () => {
  const [complete, setcomplete] = useState(true)
  const [gender, setgender] = useState("female");
  const [city, setcity] = useState("indore")

  return (
    <div>
      
      <form >
    <h1>Checkbox</h1>
        <input
     
        checked={complete}
        onChange={(e)=>{setcomplete(e.target.checked)
          console.log(e.target.checked)
        }}
        type="checkbox" />
        <hr />
        <h1>Radio Button</h1>
        <label htmlFor="male">Male</label>
        <input
        id="male"
        value="male"
        name="gender"
        checked={gender=="male"&&true}
       onChange={(e)=>{setgender(e.target.value)
        console.log(e.target.value)
       }} 
        type="radio" />
        <label htmlFor="female">Female</label>
        <input
        id="female"
        value="female"
        name="gender"
                checked={gender=="female"&&true}

       onChange={(e)=>{setgender(e.target.value)
        console.log(e.target.value)
       }} 
        type="radio" />
        <hr />
   <h1>Select</h1>
   <select value={city} onChange={(e)=>{
    setcity(e.target.value)
    console.log(e.target.value)
   }}>
    <option value="kolkata">Kolkata</option>
    <option value="delhi">Delhi</option>
    <option value="indore">Indore</option>
   </select>
      </form>
    </div>
  )
}

export default App
