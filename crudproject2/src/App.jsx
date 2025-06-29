import Navs from "./components/Navs"
import Mainroutes from "./routes/Mainroutes"
const App = () => {
  return (
    <div className="w-screen min-h-screen  bg-gray-900 text-white p-5 ">
      <Navs/>
      <Mainroutes/>
    </div>
  )
}

export default App
