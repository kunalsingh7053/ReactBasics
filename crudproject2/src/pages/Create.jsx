import React, { useContext } from 'react'
import { set, useForm } from 'react-hook-form';
import { recipecontext } from '../context/Recipeprovider';
import { nanoid } from 'nanoid';
const Create = () => {
const [data,setdata] =  useContext(recipecontext);
const {
register,
handleSubmit,
reset,

}=useForm();
 const submithandler =(recipe)=>{

recipe.id = nanoid();
setdata([...data,recipe]);
 }
  return (
    <div className='h-full w-full flex  justify-center overflow-auto '>
    <form onSubmit={handleSubmit(submithandler)} className='flex flex-col  items-center  gap-4 p-4 bg-white shadow-md rounded-md text-black h-[max-content]'>
      <h1 className='font-bold text-[#1a202b]'>Create Your Recipe</h1>
       <input {...register("url")} className='border border-gray-300 rounded p-2 w-64' type="url" placeholder='Enter image url'/>
       <input {...register("title")} className='border border-gray-300 rounded p-2 w-64' type="text" placeholder='Recipe Title'/>
       <input {...register("chef")} className='border border-gray-300 rounded p-2 w-64' type="text" placeholder='Creater Name'/>
       <textarea {...register("desc")} className='border border-gray-300 rounded p-2 w-64' placeholder='Recipe Description'></textarea>
       <textarea {...register("ingr")} className='border border-gray-300 rounded p-2 w-64' placeholder='Recipe Ingredients'></textarea>
       <textarea {...register("inst")} className='border border-gray-300 rounded p-2 w-64' placeholder='Recipe Instructions'></textarea>
       <select {...register("category")} className='border border-gray-300 rounded p-2 w-64'>
         <option value="dinner">Dinner</option>
         <option value="lunch">Lunch</option>
         <option value="Starter">Starter</option>
       </select>
       <button className='bg-blue-500 px-8 py-2 rounded'>Create</button>
    </form>

    </div>
  )
}

export default Create
