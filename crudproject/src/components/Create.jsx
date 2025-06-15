import { useState } from "react";
import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;
  

      const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
      } = useForm();
      const submithandler =(data)=>{
    data.id = nanoid();
    data.iscompleted = false;
  settodos([...todos, data]);
  toast.success("Todo Created!✅");
  reset();


  }
 
  return (
    <div className="border w-[60%] p-2 text-center">
         <h1 className="text-2xl lg:text-3xl font-thin">Set <span className="text-red-400">Reminders</span>  for tasks</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        
        <input
        {...register("title",{
          required:"title can not be empty"
        })}
        placeholder="Title"
        className="p-1 border-b w-full text-1xl lg:text-2xl font-thin outline-0"
        type="text" />
        {errors && errors.title && errors.title.message && <p className="text-[red]">{ errors.title.message}</p>}
        <button className="mt-10  text-[15px] lg:text-[20px] lg:mr-[10px] px-8 py-1 border rounded" type="submit">Creat</button>
        <button  className="mt-10 text-[15px] lg:text-[20px]  px-8 py-1 border rounded" type="button" onClick={() => settodos([])}>Clear All</button>

      </form>
    </div>
  )
}

export default Create
