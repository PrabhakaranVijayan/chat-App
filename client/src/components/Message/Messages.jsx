import React from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'

import useConversation from '../../zustand/useConversation'

const Messages = () => {
  const {messages}= useGetMessage()
  const {selectedconversation}= useConversation()
  
  
  return (
    <div className={`h-[calc(100vh-126px)] flex flex-col overflow-y-auto ps-10 py-3`}>
      {messages.map((message)=>{
        const opp_owner= selectedconversation._id === (message.receiverid || message.senderid)
        console.log(opp_owner, message)
        console.log(selectedconversation._id )
        
         const chatSide= opp_owner? "justify-end":"justify-start"
         return(
          <div className={`flex ${chatSide} py-2`} key={message._id}>
            <Message message={message} key={message._id} />
          </div>
         )

      })}
      
      
    </div>
  )
}

export default Messages