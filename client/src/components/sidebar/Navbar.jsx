import React, { useState } from 'react'
import Logout from './Logout'

const Navbar = () => {
  const[owner,setowner]= useState(JSON.parse(localStorage.getItem("chat")))
  
  return (
    <div className='border-b-2 flex justify-between py-5 border-white items-center sticky top-0'>
      <span className='text-sky-950 italic font-bold text-3xl pt-1 ps-2'>Hike</span>
      <div className='flex justify-between px-1'>
        <span className='px-2 font-bold text-lg'>{owner.name}</span>
        <button className='px-2 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-800 hover:ring-sky-800'>
          <Logout />
        </button>
      </div>
    </div>
  )
}

export default Navbar