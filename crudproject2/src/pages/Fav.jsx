import Recipecard from '../components/Recipecard';


const Fav = () => {

  const favroite =  JSON.parse(localStorage.getItem("fav") || []);

  const render = favroite.map((recipe)=>(
    <Recipecard recipe={recipe} key={recipe.id}/>
  ))
  return (
    <div className='md:grid-cols-2 md:gap-y-5 grid grid-cols-1 mt-10 w-[100%] py-4 px-2 gap-y-3 place-items-center'>
      {favroite.length>0?render:(        <h1 className="text-red-500 text-xl font-semibold">Recipe not available</h1>
)}
    </div>
  )

}

export default Fav
