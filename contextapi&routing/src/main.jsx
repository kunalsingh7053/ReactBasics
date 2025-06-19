
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wrapper from './wrapper'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(


     <BrowserRouter>
    <Wrapper>


        <App />


    </Wrapper>
</BrowserRouter>

)
