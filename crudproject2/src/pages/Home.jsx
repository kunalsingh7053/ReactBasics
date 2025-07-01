import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getproduct = async()=>{
    try{
  const response = await axios.get("/products");
  console.log(response.data);
    }
    catch(error){
console.log(error);
    }
  }
  useEffect(()=>{
    getproduct();

    return ()=>{
      console.log("Home.jsx Unmount")
    }
  })
  return (
    <div>
      <h1>Home</h1>
     
    </div>
  )
}

export default Home
