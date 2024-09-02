import {createContext, useContext, useState} from "react"



export const Logincontext= createContext()

export const useLogincontext=()=>{
    return useContext(Logincontext)
}

export const Logincontextprovider=({children})=>{
    
    const[loginuser,setloginuser]=useState(JSON.parse(localStorage.getItem("chat")) || null)
    return <Logincontext.Provider value={{loginuser,setloginuser}}>{children}</Logincontext.Provider>

}

