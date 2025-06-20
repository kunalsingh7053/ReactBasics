import { Outlet, useNavigate } from 'react-router-dom';


const Service = () => {
  const navigate = useNavigate(); // ✅ correct variable assignment

  return (
    <div>
      <h1 className="text-5xl font-thin mb-3">Service</h1>
       <button onClick={()=> navigate("/Service/detail")} className="bg-white text-black px-4 py-2 rounded  active:scale-90 transition transform duration-100 mt-5 mb-5 mr-5">More Details</button>
       <button onClick={()=> navigate("/Service/Update")} className="bg-white text-black px-4 py-2 rounded  active:scale-90 transition transform duration-100 mt-5 mb-5">Service Update</button>
 <hr class="my-10" />
 <Outlet/>
    </div>
  )
}

export default Service
