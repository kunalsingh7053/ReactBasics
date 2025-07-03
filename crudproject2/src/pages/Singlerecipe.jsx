import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/Recipeprovider';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const Singlerecipe = () => {

  const [favroite,setfavroite] = useState(JSON.parse(localStorage.getItem("fav"))||[])

 
  const navigate = useNavigate();
const [data,setdata] = useContext(recipecontext);    
const param = useParams();
const recipe = data.find((recipe)=> param.id == recipe.id)
  const {
    register,
    handleSubmit,
    reset,
    
    }=useForm({
        defaultValues:{
            title:recipe.title,
            url:recipe.url,
            chef:recipe.chef,
            inst:recipe.inst,
            desc:recipe.desc,
            ingr:recipe.ingr,
        }
    });
     const updatehandler =(recipe)=>{
    const index = data.findIndex((e)=>e.id==param.id);
    const copydata  = [...data];
    copydata[index] = {...copydata[index],...recipe};
    setdata(copydata);
      localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Update Succcessfully!")
    
  }
     const delethandler =()=>{
        const filterdata = data.filter((r)=>r.id!= param.id);
       const filterfav = data.filter((r)=>r.id!= recipe.id);

        setdata(filterdata);
        setfavroite(filterdata);
          localStorage.setItem("recipes", JSON.stringify(filterdata));
          localStorage.setItem("fav", JSON.stringify(filterfav));

        toast.success("Recipe Deleted Succcessfully!")
        navigate('/recipes')
     }
     
     const favhandler = ()=>{
       let copy = [...favroite];
       copy.push(recipe);
       setfavroite(copy); // update state
       
       localStorage.setItem("fav",JSON.stringify(copy));
      }
      const unfavhandler = ()=>{
        const filterfav = favroite.filter((f)=>f.id!=recipe.id);
        setfavroite(filterfav);
        localStorage.setItem("fav",JSON.stringify(filterfav));
        
      }
      useEffect(()=>{
          console.log("Single.jsx mount")
      
          return ()=>{
            console.log("Single.jsx Unmount")
          }
        },[favroite])
  return (
 
<div className='relative flex lg:flex-row flex-col w-full min-h-full gap-3 lg:items-start overflow-x-hidden px-3'>
  {favroite.find((f)=>f.id==recipe.id)
?(<i onClick={unfavhandler} className="hover:scale-105 top-[2%] right-[10%] absolute text-3xl text-red-400 ri-heart-2-fill"></i>)
:(<i onClick={favhandler} className="hover:scale-105  top-[2%] right-[10%] absolute text-3xl text-white ri-heart-2-fill"></i>)
}
      <div className="lg:w-[50%] left flex flex-col  w-[100%] gap-y-3 px-5 py-5 bg-slate-900   rounded ">
        <div className='sm:flex-row flex flex-col gap-3 '> 
         <img className="object-cover w-[50%] rounded-[20px]" src={recipe.url} alt="" />
         <div >
          <h1 className=' font-thin  text-4xl  sm:text-4xl mb-2 md:text-5xl lg:text-3xl'>{recipe.title} </h1>
          <p className='text-red-400'>{recipe.chef}</p>
        <small className='text-white'>{recipe.category}</small>

         </div>
           

        </div>
         <h1 className='text-start font-bold text-xl text-red-300'>Description:-</h1>
         <p className='text-white'>{recipe.desc}</p>
          <h1 className='text-start font-bold text-xl text-red-300 text-center'>Ingredients</h1>
          <p>{recipe.ingr}</p>
          <h1 className='text-start font-bold text-xl text-red-300 text-center'>Instruction</h1>
          <p>{recipe.inst}</p>
      </div>
       <form onSubmit={handleSubmit(updatehandler)} className='lg:w-[50%] w-[100%] min-h-full  flex flex-col  items-center  gap-4 p-4 bg-[#0F172B] shadow-md rounded-md text-white  mb-5'>
      <h1 className='font-bold text-white text-2xl'>Update Your Recipe</h1>
       <input {...register("url")} className='border border-gray-300 rounded p-2 w-[80%]' type="url" placeholder='Enter image url'/>
       <input {...register("title")} className='border border-gray-300 rounded p-2 w-[80%]' type="text" placeholder='Recipe Title'/>
       <input {...register("chef")} className='border border-gray-300 rounded p-2 w-[80%]' type="text" placeholder='Creater Name'/>
       <textarea {...register("desc")} className='border border-gray-300 rounded p-2 w-[80%]' placeholder='Recipe Description'></textarea>
       <textarea {...register("ingr")} className='border border-gray-300 rounded p-2 w-[80%]' placeholder='Recipe Ingredients'></textarea>
       <textarea {...register("inst")} className='border border-gray-300 rounded p-2 w-[80%]' placeholder='Recipe Instructions'></textarea>
       <select {...register("category")} className='bg-[#0F172B] border border-gray-300 rounded p-2 w-[80%]'>
         <option value="dinner">Dinner</option>
         <option value="lunch">Lunch</option>
         <option value="Starter">Starter</option>
       </select>
       <button className='bg-blue-500 px-8 py-2 rounded w-[80%]'>Update</button>
       <button onClick={delethandler} className='bg-red-500 px-8 py-2 rounded w-[80%]'>Delete</button>
    </form>
    </div>
    
  )
}

export default Singlerecipe
