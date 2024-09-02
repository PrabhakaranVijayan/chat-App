import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage'
import sendmsg from '../../assets/send-solid-24.png'

const Input = () => {
  const[message,setmessage]= useState("")
  const {sendmessages}= useSendMessage()

  const handlesubmit =async(e)=>{
    e.preventDefault()
     await sendmessages(message)
     setmessage("")
  }
  return (
    <div className='flex justify-center items-center bg-sky-50 h-14'>
      <form className='flex space-between ring-1 ring-blue-800 rounded w-10/12 px-2 h-12' onSubmit={handlesubmit}>
        <div className=' flex items-center justify-between flex-1'>
           <input type='text'placeholder='Type something..' className='px-2 py-2 outline-none border-none w-5/6 bg-transparent focus:outline-none' value={message} onChange={(e)=>setmessage(e.target.value)} />
        </div>
        
        <button className=' cursor-pointer'><img src={sendmsg} /></button>
      </form>
    </div>
    

    
  )
}

export default Input