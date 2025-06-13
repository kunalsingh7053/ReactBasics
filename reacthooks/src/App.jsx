import { Fragment } from "react"


const App = () => {
  //js logic....

  //non-paramitrized function.
  const nonpara=()=>{
    alert("clicked...");
  }
  const para=(msg)=>{
    alert(msg);
  }
 
  return (
 
 <>
 <h1>{2+5}</h1>
    <div>hellow</div>
    <div>brother</div>
    <button onClick={nonpara}>click nonpara</button>
    <button onClick={()=>{
    para("raat andheri diye bhujh chuke");
  }}>click para</button>
 </>


  )
}

export default App
//function call is replaced by it' return value;
//A function component always return HTML;

//1.we can not wirte anything after return.
//2.we can only return single data/entity/variable/value.
//there must be single return in a function and that must be the last statement.