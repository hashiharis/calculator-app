import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Login } from './components/Login.jsx'
import { Calculator } from './components/Calculator.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
       <Route path="/login" element={<Login/>}/>  
      <Route path="/calculator" element={<Calculator/>}/>
    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>,
)
