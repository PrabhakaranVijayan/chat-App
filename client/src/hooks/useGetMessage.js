import { useEffect } from "react"
import useConversation from "../zustand/useConversation"
import axios from "axios"



const useGetMessage=()=>{
    const{messages,setMessages,selectedconversation}= useConversation()

    useEffect(()=>{
        const getMessages=async()=>{

            try{
                let response= await axios.get(`http://localhost:8000/api/messages/${selectedconversation._id}`,{withCredentials:true})
                let success= response.data
              if(success.error){
                throw new success.error
              }
             setMessages(success)

            }
            catch(error){
                console.log(error.error)
            }
            

        }
        const settimer= setTimeout(() => {
            if(selectedconversation?._id){
                getMessages()
            }
            
        }, 1000);

        return ()=>clearTimeout(settimer)
        

    },[selectedconversation._id,setMessages])
    return {messages}
}

export default useGetMessage