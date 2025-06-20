import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h1 className='text-4xl font-thin mb-3'>More Services</h1>
      <h2 className='text-2xl font-thin mb-5'>Choous us...</h2>
 <button onClick={()=>navigate("/Service")} className="bg-white text-black px-4 py-2 rounded  active:scale-90 transition transform duration-100">Go Back</button>

    </div>
  )
}

export default ServiceDetails



