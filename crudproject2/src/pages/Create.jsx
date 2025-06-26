import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Recipecontext } from "../context/Recipeprovider";
import { nanoid } from 'nanoid';


const Create = () => {
  const {data,setdata} = useContext(Recipecontext)
   const {
    register,
    handleSubmit,
    reset
   
   } = useForm(); 
   const SubmitHandler = (recipe)=>{
     recipe.id = nanoid();
     console.log(recipe)
setdata([...data,recipe]);
reset();

   }   
  return (
   <form onSubmit={handleSubmit(SubmitHandler)}>
    <input className="block border-b outline-0 p-2" {...register("url",{ required: true })} type="url" placeholder="Enter img Url"  />
    <small className="text-red-400 mb-5">This is how the error is shown</small>

    <input className="block border-b outline-0 p-2" {...register("title",{ required: true })} type="text" placeholder="Recipe TItle" />

    <input className="block border-b outline-0 p-2" {...register("chief",{ required: true })} type="text" placeholder="chief name" />

    <textarea className="block border-b outline-0 p-2" {...register("discription",{ required: true })}  placeholder="start from here" >
      </textarea>

    <textarea className="block border-b outline-0 p-2" {...register("ingredients",{ required: true })}  placeholder="write ingredients seperated by comma" >
      </textarea>

    <textarea className="block border-b outline-0 p-2 mb-5" {...register("instructions",{ required: true })}  placeholder="write instructions" >
      </textarea>

    <select className="bg-gray-900 block border-b outline-0 p-2" {...register("category",{ required: true })}  >
<option value="cat-1">Category 1</option>
<option value="cat-2">Category 2</option>
<option value="cat-3">Category 3</option>
    </select>
    
 <button className="mt-5  block bg-gray-900 px-4 py-2 rounded ">
  Save Recipe
 </button>
   </form>

  )
}

export default Create;
