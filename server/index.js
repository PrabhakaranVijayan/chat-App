const express= require('express')
const dotenv =require('dotenv')
dotenv.config()
const userroutes= require('./auth/users');
const messageroutes= require('./auth/messages')
require('./db/connect')
const app= express();
app.use(express.json())
// const PORT=5000
const cookieparser= require('cookie-parser');
const routerprotection = require('./auth/middleware');
app.use(cookieparser())
const cors= require('cors');


let corsOptions= {
    origin:"http://localhost:5173",
    optionsSuccessStatus:200,
    credentials:true
   
    
}
app.use(cors(corsOptions))

app.get('/',routerprotection,(req,res)=>{
    res.send("hello world")
})

app.use("/api/users",userroutes)
// app.use()
app.use("/api/messages",routerprotection,messageroutes)







app.listen(process.env.PORT,()=>{
    
    console.log(`app listening to port ${process.env.PORT}`)
})