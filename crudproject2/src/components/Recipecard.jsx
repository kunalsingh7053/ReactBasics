import React from 'react'

const Recipecard = (props) => {
    
  return (
    <div className='w-full flex justify-center text-black'>

    <div className='flex flex-col items-center bg-white w-[80%] h-[max-content] rounded '>
      <img className='rounded w-[100%] h-[40%] object-cover' src={props.recipe.url} alt="" />
         <h1 className='font-bold  text-xl '>{props.recipe.title}</h1>
         <small className='text-red-400'>{props.recipe.chef}</small>
         <p className='px-2 text-sm text-justify'>{props.recipe.desc}... <small className='text-blue-500'>More</small></p>
    </div>

    </div>
  )
}

export default Recipecard
