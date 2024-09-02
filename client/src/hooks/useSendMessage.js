import axios from "axios"
import useConversation from "../zustand/useConversation"



const useSendMessage=()=>{
    const{messages,setMessages,selectedconversation}= useConversation()

    const sendmessages=async(messagecontent)=>{

        try{
            const response= await axios.post(`http://localhost:8000/api/messages/send/${selectedconversation._id}`,{message:messagecontent},{withCredentials:true})
            const success= response.data
            if(success.error){
                throw new error(success.error)
            }
            setMessages([...messages,success])
        
        }
        catch(error){
            console.log("error in send message", error.message)


        }
    }
    return {sendmessages}
}

export default useSendMessage;