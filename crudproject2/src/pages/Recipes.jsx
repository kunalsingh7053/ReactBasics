
import { recipecontext } from '../context/Recipeprovider';
import { useContext, useState } from 'react';
import Recipecard from '../components/Recipecard';
import FuzzyText from '../../fuzzy/FuzzyText/FuzzyText';

const Recipes = () => {
  const [data] =  useContext(recipecontext);
 const [search,setsearch]  =  useState("");
 const filterdata = data.filter((recipe)=>recipe.title.toLowerCase().includes(search.toLowerCase()));

  const render = filterdata.map((recipe)=>(
    <Recipecard recipe={recipe} key={recipe.id}/>
  ))
  return (
    
    <>
  <div className="flex justify-center mt-6 px-4">
  <input
    type="text"
    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
    placeholder="Search recipe by title..."
    value={search}
    onChange={(e) => setsearch(e.target.value)}
  />
</div>

      {filterdata.length>0?(<div className='md:grid-cols-2 md:gap-y-5 grid grid-cols-1 mt-10 w-[100%] py-4 px-2 gap-y-3 place-items-center'>
        {render}  
    </div>):(
 <div className="flex justify-center mt-5 w-[100%] ">
  <FuzzyText
    fontSize="clamp(1.5rem, 5vw, 3rem)"
    fontWeight={700}
    color="red"
  >
    Recipe not available
  </FuzzyText>
</div>

)}
   
   </>
  );
};

export default Recipes;
