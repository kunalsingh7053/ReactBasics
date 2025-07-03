import Recipecard from '../components/Recipecard';
import FuzzyText from '../../fuzzy/FuzzyText/FuzzyText';


const Fav = () => {

  const favroite =  JSON.parse(localStorage.getItem("fav")) || [];

  const render = favroite.map((recipe)=>(
    <Recipecard recipe={recipe} key={recipe.id}/>
  ))
  return (
    <>
      {favroite.length>0?(<div className='md:grid-cols-2 md:gap-y-5 grid grid-cols-1 mt-10 w-[100%] py-4 px-2 gap-y-3 place-items-center'>
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
  )
}

export default Fav
