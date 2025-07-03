import { useState, useEffect } from "react";
import Navs from "./components/Navs";
import Mainroutes from "./routes/Mainroutes";
import Loader from "./components/Loader"; // GSAP loader

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3500); // Loader time (match with animation)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#558186] text-white">
      {showLoader ? (
        <Loader onFinish={() => setShowLoader(false)} />
      ) : (
        <>
          <Navs />
          <Mainroutes />
        </>
      )}
    </div>
  );
};

export default App;
