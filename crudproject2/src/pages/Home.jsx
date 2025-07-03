import { useEffect, useRef } from "react";
import axios from "../utils/axios";
import CircularGallery from "../../circular/CircularGallery/CircularGallery";
import ScrollVelocity from "../../scroll/ScrollVelocity/ScrollVelocity";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import ThreeRecipeCard from "../components/ThreeRecipeCard";

const Home = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const galleryRef = useRef();
  const featuredRef = useRef();
  const whyRef = useRef();
  const contactRef = useRef();

  const getproduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(scrollRef.current, { opacity: 0, y: -40, duration: 1 })
      .from(galleryRef.current, { opacity: 0, y: 100, duration: 1 }, "-=0.5")
      .from(featuredRef.current, { opacity: 0, y: 100, duration: 1 }, "-=0.4")
      .from(whyRef.current, { opacity: 0, y: 100, duration: 1 }, "-=0.4")
      .from(contactRef.current, { opacity: 0, y: 80, duration: 1 }, "-=0.3");

    return () => {
      console.log("Home.jsx Unmount");
    };
  }, []);

  return (
    <div className="w-full min-h-full overflow-x-hidden bg-[#0F172B] text-white">
      {/* 1️⃣ Scroll Text Animation */}
      <div ref={scrollRef}>
        <ScrollVelocity
          texts={["Upload Your Own Recipe", "Scroll Down⬇"]}
          className="custom-scroll-text"
        />
      </div>

      {/* 2️⃣ Circular Gallery */}
      <div ref={galleryRef} style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>

      {/* 3️⃣ Featured Section */}
      <section ref={featuredRef} className="px-6 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">🔥 Featured Recipes</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-300">
          Our top-picked recipes from thousands of submissions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-[#1a2a38] p-4 rounded shadow hover:scale-105 transition-transform">🍕 Margherita Pizza</div>
          <div className="bg-[#1a2a38] p-4 rounded shadow hover:scale-105 transition-transform">🍝 Spaghetti Bolognese</div>
          <div className="bg-[#1a2a38] p-4 rounded shadow hover:scale-105 transition-transform">🥗 Avocado Salad</div>
        </div>
      </section>

      {/* 4️⃣ Why Choose Us Section */}
      <section ref={whyRef} className="px-6 py-12 bg-[#112233] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">💡 Why Choose Us?</h2>
        <ul className="max-w-4xl mx-auto space-y-3 text-lg text-gray-200">
          <li>✅ Step-by-step clear instructions</li>
          <li>✅ Professionally designed UI with animations</li>
          <li>✅ Built by a passionate foodie & coder</li>
        </ul>
      </section>

      {/* 5️⃣ Contact / CTA */}
      <section ref={contactRef} className="px-6 py-16 text-center bg-gradient-to-br from-cyan-500 to-blue-700">
        <h2 className="text-4xl font-bold text-white mb-4">🚀 Ready to Share Your Recipe?</h2>
        <p className="text-white text-lg mb-6">Click below to get started.</p>
       <button  onClick={()=>navigate('/create')} className=" bg-white text-black font-semibold px-5 py-3 rounded-lg shadow hover:bg-cyan-100 transition-all duration-300"
>          Create Recipe Now
</button>
        {/* 🧊 3D Recipe Card Section */}
<section className="px-6 py-12 text-center">
  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-400">3D Recipe Preview</h2>
  <p className="max-w-2xl mx-auto text-lg mb-6 text-gray-300">
    Explore our recipe card in 3D! It rotates, it's stylish, and it's fun.
  </p>
  <ThreeRecipeCard />
</section>

      </section>
       {/* 6️⃣ Footer Section */}
      <footer className="bg-[#0F172B] border-t border-cyan-800 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">🍽️ MyRecipeBook</h2>
            <p className="text-gray-400 text-sm">
              Built by Kunal Singh Patel with React & Tailwind .
            </p>
          </div>
       
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>


    </div>
  );
};

export default Home;
