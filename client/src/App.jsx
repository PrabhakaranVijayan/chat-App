import Home from "./pages/Home"
import './App.css'
import {BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { useLogincontext } from "./context/Logincontext"
import useGetConversation from "./hooks/useGetConversation"



function App() {

  const {loginuser}= useLogincontext()
  
 return (
  // {}
      <div>
        <Router >
          <Routes>
             <Route  path="/" element={loginuser?<Home />:<Navigate to ='/login' />}/>
             <Route path="/signup" element={<Signup />} />
             <Route path="/login" element={loginuser?<Navigate to='/' />:<Login />} />

          </Routes>
       </Router>

      </div>
      
     
      
    
    
  )
}

export default App
