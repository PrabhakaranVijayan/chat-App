import {create} from "zustand"

const useConversation=create((set)=>({
    selectedconversation:null,
     setselectedconversation:(selectedconversation) =>set({selectedconversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),

}));

export default useConversation;