import React from 'react'
import useConversation from '../../zustand/useConversation'

const Chat = ({conversation}) => {
  const {selectedconversation,setselectedconversation}= useConversation()
  const isslected= selectedconversation?._id === conversation._id
  return (
    <div className='h-auto border-b-slate-100 ps-4 py-4 rounded hover:bg-sky-50' onClick={()=>setselectedconversation(conversation)}>
        <p>{conversation.name}</p>
    </div>
  )
}

export default Chat