const mongoose= require("mongoose")


const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
})

// const messageSchema= new mongoose.Schema({
//     from:z.String(),
//     to:z.String(),
//     message:z.object({
//         chat:z.String(),
//         timestamp:z.String().datetime()
//     })
// })







const User=mongoose.model("User",userschema) 

module.exports= User