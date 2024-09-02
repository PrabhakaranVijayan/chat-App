import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Logincontextprovider } from './context/Logincontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logincontextprovider>
       <App />

    </Logincontextprovider>
    
  </StrictMode>,
)
