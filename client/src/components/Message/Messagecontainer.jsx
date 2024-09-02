import useConversation from "../../zustand/useConversation"
import Input from "./Input"

import Messages from "./Messages"


const Messagecontainer = () => {
  const {selectedconversation}= useConversation()
  return (
    
    <div>
      {!selectedconversation?( <div className="flex justify-center h-screen items-center font-semibold text-xl"><NotSelected /> </div>):(
       <div className='h-screen'>
       <div className='flex ps-2 py-5 justify-start border-b-2 border-white sticky top-0'>
         
         <span className='ps-3'>{selectedconversation.name}</span>
       </div>
         
       
         <Messages />
         <Input />
       </div>)
      
    }
      
    </div>
  )
}


export default Messagecontainer


const NotSelected=()=>{
  return(
    <div>
       <p>no conversation is selected</p>
    </div>
    
  );
};
