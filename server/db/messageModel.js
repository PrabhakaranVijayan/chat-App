const mongoose= require('mongoose')


const messageschema= new mongoose.Schema(
    {
       senderid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
             required:true,
        },
        
            receiverid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true,
            },
            message:{
                type:String,
                required:true,
            },
            
        
    },{timestamp:true,}      
        
    
)
const Message= mongoose.model("Message", messageschema)
module.exports= Message