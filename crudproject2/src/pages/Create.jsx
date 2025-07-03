import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { recipecontext } from '../context/Recipeprovider';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Create = () => {
  const navigate = useNavigate();
  const [data, setdata] = useContext(recipecontext);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const formRef = useRef();

  const submithandler = (recipe) => {
    const newRecipe = { ...recipe, id: nanoid() };
    const copydata = [...data, newRecipe];
    setdata(copydata);
    localStorage.setItem('recipes', JSON.stringify(copydata));
    reset();
    toast.success('Recipe Created Successfully!');
    navigate('/recipes');
  };

  // 🎬 Animate form on mount
  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-full w-full flex justify-center overflow-hidden text-white">
      <form
        ref={formRef}
        onSubmit={handleSubmit(submithandler)}
        className="flex flex-col items-center gap-4 p-4 bg-[#0F172B] shadow-lg rounded-md text-white h-[auto] w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mt-8"
      >
        <h1 className="font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Create Your Recipe
        </h1>
        <input {...register('url')} className="border border-gray-300 rounded p-2 w-[90%]" type="url" placeholder="Enter image url" />
        <input {...register('title')} className="border border-gray-300 rounded p-2 w-[90%]" type="text" placeholder="Recipe Title" />
        <input {...register('chef')} className="border border-gray-300 rounded p-2 w-[90%]" type="text" placeholder="Creator Name" />
        <textarea {...register('desc')} className="border border-gray-300 rounded p-2 w-[90%]" placeholder="Recipe Description"></textarea>
        <textarea {...register('ingr')} className="border border-gray-300 rounded p-2 w-[90%]" placeholder="Recipe Ingredients"></textarea>
        <textarea {...register('inst')} className="border border-gray-300 rounded p-2 w-[90%]" placeholder="Recipe Instructions"></textarea>
        <select {...register('category')} className="bg-[#0F172B] border border-gray-300 rounded p-2 w-[90%]">
          <option value="dinner">Dinner</option>
          <option value="lunch">Lunch</option>
          <option value="starter">Starter</option>
          <option value="breakfast">Breakfast</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-600 transition-colors px-8 py-2 rounded w-[90%]">
          Create
        </button>
      </form>
    </div>
  );
};

export default Create;
