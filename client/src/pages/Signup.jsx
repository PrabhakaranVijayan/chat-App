import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { Navigate,Link } from "react-router-dom"


const Signup = () => {
 const [loading,setloading]= useState(false)
 
  const handlesubmit=async(e)=>{
    e.preventDefault()
    const formdata= {
      name:e.target[0].value,
      email:e.target[1].value,
      password:e.target[2].value,
    }
    try{
      setloading(true)
      const response= await axios.post('http://localhost:8000/api/users/signup',formdata
       )
       const success= await response.data
       alert(success);
       
        toast.success(success);
        if(success.error){
          console.log("please check",success.error)
        }
        
      
      
    }
    catch(error){
      console.log(error.message)
      
    }
     
      
  }

  return (
    <div className='bg-sky-200 h-screen flex items-center justify-center md:max-2xl:flex md:max-2xl:items-center md:max-2xl:justify-center'>
      <div className='flex flex-col w-4/5 h-2/3 md:max-2xl:w-1/3 bg-white items-center justify-center rounded gap-7 p-4'>
        <span className='text-sky-950 italic font-bold text-3xl'>Hike</span>
        <span>Create your account</span>
       <form onSubmit={handlesubmit} className='flex flex-col items-center w-full gap-4'>
          <input type='text' placeholder='Enter your name' className='border-b-2 border-sky-600 focus: outline-none focus:ring-1 focus:ring-sky-600 rounded w-3/4 py-1 px-1' />
          <input type='email' placeholder='enter your email' className='border-b-2 border-sky-600 focus: outline-none focus:ring-1 focus:ring-sky-600 rounded w-3/4 py-1 px-1' />
          <input type='password' placeholder='enter your password' className='border-b-2 border-sky-600 focus: outline-none focus:ring-1 focus:ring-sky-600 rounded w-3/4 py-1 px-1' />
          
          <button className='bg-sky-600 rounded-md w-3/4 text-white py-1' disabled={loading}>Sign up</button>

        </form>
        
        
        <p>Already have an account? <Link to="/login" className='text-sky-600'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup