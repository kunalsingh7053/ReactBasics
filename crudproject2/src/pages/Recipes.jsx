import React from 'react'
import { recipecontext } from '../context/Recipeprovider';
import { useContext } from 'react';
import Recipecard from '../components/Recipecard';
const Recipes = () => {
  const [data] =  useContext(recipecontext);

  const render = data.map((recipe)=>(
    <Recipecard recipe={recipe} key={recipe.id}/>
  ))
  return (
    <div>
      {render}
    </div>
  )
}

export default Recipes
