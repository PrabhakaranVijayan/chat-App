const mongoose=require("mongoose")



 mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("db connected")
 }).catch((err)=>console.log(err))


