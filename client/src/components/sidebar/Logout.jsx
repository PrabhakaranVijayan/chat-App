import axios from 'axios'
import React from 'react'
import { useLogincontext } from '../../context/Logincontext'

const Logout = () => {

  const {setloginuser}= useLogincontext()

  const handlelogout=async()=>{

    try{
      const response= await axios.get('http://localhost:8000/api/users/logout')
      const success= await response.data
      alert(success);

      localStorage.removeItem("chat")
      setloginuser(null)
    }
    catch(error){
      alert("cant able to logout")
      console.log(error.data)

    }
    
    
  }

  return (
    <div>
      <button onClick={handlelogout}>
        logout
      </button>
    </div>
  )
}

export default Logout