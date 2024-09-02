import React from 'react'


const Message = ({message}) => {
  
  return (
    <div className='px-2'>
      <div className='w-fit bg-sky-950 rounded-tl-md rounded-br-md rounded-bl-md py-1 px-2'>
  
            <p className='text-white'>{message.message}</p>

      </div>
    </div>
  )
}

export default Message