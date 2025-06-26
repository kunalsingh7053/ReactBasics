
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Recipeprovider from './context/Recipeprovider.jsx'
createRoot(document.getElementById('root')).render(
<Recipeprovider>


  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>

</Recipeprovider>

);
