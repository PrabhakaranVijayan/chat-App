import React from 'react'
import Chat from './Chat'
import useGetConversation from '../../hooks/useGetConversation'

const Chats = () => {
  const{conversations}= useGetConversation()
  console.log(conversations)
  return (
    <div className='h-[calc(100vh-130px)] flex flex-col px-2 py-3 justify-start border-b border-white overflow-y-auto'>
      
      {conversations.map((conversation)=>{
        
         return <Chat key={conversation._id} conversation={conversation}  />
        
      })}
      
        
        
    </div>
  )
}

export default Chats