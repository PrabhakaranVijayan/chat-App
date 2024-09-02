import { useEffect, useState } from "react"
import  axios  from "axios"
import { useLogincontext } from "../context/Logincontext"




const useGetConversation=()=>{
    const[loading,setloading]= useState(false)
    const[conversations,setconversation]= useState([])
    
    

    useEffect(()=>{
        const getconversation=async()=>{
            try{
                setloading(true)
                const response=  await axios.get('http://localhost:8000/api/users',{withCredentials:true})
                
                const success=  response.data
               if(success=="please login your account"){
                localStorage.removeItem("chat")
                
                return;
               }
               else{
                // console.log("success",success)
                setconversation(success)
                

               }
               
                
                
            }
            catch(error){
                
                console.log(error.data)

            }
            finally{
                setloading(false)
            }

        }
        const timer= setTimeout(() => {
            getconversation();
            
        }, 3000);
        return ()=>clearTimeout(timer)
        
    },[]);
    return{
        
        conversations,
        loading
        
    }

}
export default useGetConversation;