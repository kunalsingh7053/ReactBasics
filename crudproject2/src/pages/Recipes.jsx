import { useContext } from "react"
import { Recipecontext } from "../context/Recipeprovider"


const Recipes = () => {
 const {data} = useContext(Recipecontext)
const renderrecipe = data.map((recipe) => (
  <div key={recipe.id}>
    <h1>{recipe.title}</h1>
  </div>
));


  return (
    <div>
      {renderrecipe}
    </div>
  )
}

export default Recipes
