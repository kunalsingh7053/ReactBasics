import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/Recipeprovider';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
const [data,setdata] =  useContext(recipecontext);
const {
register,
handleSubmit,
reset,

}=useForm();
 const submithandler =(recipe)=>{

recipe.id = nanoid();
setdata([...data,recipe]);

reset();
toast.success("Recipe Created Succcessfully!")
navigate('/recipes');
 }
  return (
    <div className='min-h-full w-full flex  justify-center overflow-hidden text-white '>
    <form onSubmit={handleSubmit(submithandler)} className='flex flex-col  items-center  gap-4 p-4 bg-[#0F172B] shadow-md rounded-md text-white h-[80vh] w-[80%]'>
      <h1 className='font-bold  text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>Create Your Recipe</h1>
       <input {...register("url")} className='border border-gray-300 rounded p-2 w w-[80%]' type="url" placeholder='Enter image url'/>
       <input {...register("title")} className='border border-gray-300 rounded p-2  w-[80%]' type="text" placeholder='Recipe Title'/>
       <input {...register("chef")} className='border border-gray-300 rounded p-2  w-[80%]' type="text" placeholder='Creater Name'/>
       <textarea {...register("desc")} className='border border-gray-300 rounded p-2  w-[80%]' placeholder='Recipe Description'></textarea>
       <textarea {...register("ingr")} className='border border-gray-300 rounded p-2 w-[80%]' placeholder='Recipe Ingredients'></textarea>
       <textarea {...register("inst")} className='border border-gray-300 rounded p-2  w-[80%]' placeholder='Recipe Instructions'></textarea>
       <select {...register("category")} className='border border-gray-300 rounded p-2  w-[80%]'>
         <option value="dinner">Dinner</option>
         <option value="lunch">Lunch</option>
         <option value="Starter">Starter</option>
       </select>
       <button className='bg-blue-500 px-8 py-2 rounded w-[80%]'>Create</button>
    </form>

    </div>
  )
}

export default Create
