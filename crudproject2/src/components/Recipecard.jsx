import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DecryptedText from '../../decrypted/DecryptedText/DecryptedText'


const Recipecard = (props) => {
    const {id,url,title,ingr,desc,chef,inst} = props.recipe;
    const navigate = useNavigate();
  return (
  
    


    <div className='sm:flex-row  sm:justify-between flex flex-col items-center bg-[#0F172B] w-[80%]   py-4  px-2  gap-y-3 hover:scale-105 transform transition-transform duration-300 rounded'>
      <img className=' w-[15%]  h-[40%] object-cover rounded-[50%]' src={url} alt="" />
      <DecryptedText
         text={title}
         speed={100}
         maxIterations={20}
         characters="kunal1234!?"
         className="revealed text-xl"
         parentClassName="all-letters"
         encryptedClassName="encrypted"
         />
         <button className='sm:w-[25%] w-[100%] bg-blue-500 rounded px-4 py-2' onClick={()=>navigate(`/recipes/detail/${id}`)}> View Recipe</button>
    </div>

    
 
  )
}

export default Recipecard
