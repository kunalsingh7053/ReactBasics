
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { ToastContainer,Slide, Bounce } from 'react-toastify';
import Wrapper from './Wrapper.jsx';

createRoot(document.getElementById('root')).render(


<>

<Wrapper App={<App/>} />
 <ToastContainer
position="top-center"
autoClose={5001}
limit={2}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
  />
</>



)

