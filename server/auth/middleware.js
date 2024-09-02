const jwt= require('jsonwebtoken')

const User = require('../db/model')

const secret= "hello"

const routerprotection= async(req,res,next)=>{
    try{
        const jwtToken= req.cookies.jwt
        console.log(jwtToken)

        if(!jwtToken){
            res.send("please login your account")
            return
        }
        const decoded= jwt.verify(jwtToken,secret);
        if(!decoded){
            res.send("invalid token")
        }
        
        const user= await User.findById(decoded.id)
        if(!user){
            console.log("no user found")
        }
        console.log(user);
        req.user= user;
        next();
    }catch(error){
        console.log("error in protecting middleware",error.message)
        res.send("error in middleware")
    }
    
}
module.exports= routerprotection