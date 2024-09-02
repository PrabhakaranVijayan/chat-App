import { useState } from "react";
import axios from "axios";
import { useLogincontext } from "../context/Logincontext";
import { Link } from "react-router-dom";
import useGetConversation from "../hooks/useGetConversation";


const Login = () => {
  const[loading,setloading]= useState(false)
  const {setloginuser}= useLogincontext()
  

  const handlesumbit=async(e)=>{
    e.preventDefault()
    const logindata={
      name:e.target[0].value,
      password:e.target[1].value,
    };

    try{
      setloading(true);
      const response= await axios.post("http://localhost:8000/api/users/login",logindata,{withCredentials:true})
      const success= await response.data
      const jwtcookie= await success.cookies
      console.log(jwtcookie)
      console.log(success)
      if(success.error){
        console.log(success.message)
      }
      localStorage.setItem("chat",JSON.stringify(logindata))
      
      
      
      setloginuser(logindata)


    }
    catch(error){
      
      console.log("sorry ",error)
    }

  }
  return (
    <div className='bg-sky-200 h-screen flex items-center justify-center md:max-2xl:flex md:max-2xl:items-center md:max-2xl:justify-center'>
      <div className='flex flex-col w-4/5 h-2/3 md:max-2xl:w-1/3 md:max-2xl:h-2/3 bg-white items-center justify-center rounded-md gap-7 p-4'>
         <span className='text-sky-950 italic font-bold text-3xl sticky top-0 '>Hike</span>
         <span>Login your account</span>
         
          <form onSubmit={handlesumbit} className="flex flex-col justify-center w-full items-center gap-4"> 
           <input type='text' placeholder='enter your name' className='border-b-2 border-sky-600 focus: outline-none focus:ring-1 focus:ring-sky-600 rounded w-3/4 py-1 px-1' />
           <input type='password' placeholder='enter your password' className='border-b-2 border-sky-600 focus: outline-none focus:ring-1 focus:ring-sky-600 rounded w-3/4 py-1 px-1' />
           <button className='bg-sky-600 rounded-md w-3/4 text-white py-1'>Login</button>

          </form>

         
        
      
        <p>{"Don't"} have an account? <Link to="/signup" className='text-sky-600'>Signup</Link></p>
      </div>
    </div>
  )
}

export default Login