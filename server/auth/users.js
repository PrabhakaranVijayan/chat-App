const express= require("express");
const router= express.Router();
const z= require("zod");
const User = require("../db/model");
const jwt= require('jsonwebtoken');
const routerprotection = require("./middleware");

const secret= "hello"


let signup= z.object({
    name:z.string().trim(),
    email:z.string().email(),
    password:z.string().min(6).trim()
})
let loginschema= z.object({
    name:z.string(),
    password:z.string()
})





router.post('/signup',async(req,res)=>{
    let createaccount= signup.safeParse(req.body)
    if(!createaccount.success){
        res.status(400).send("please enter the correct details")
        return
    }
    let name= createaccount.data.name
    let email= createaccount.data.email
    let password= createaccount.data.password
    if(password<6){
        res.send("password should have minimum 6 characters")
        return;
    }
    const user= await User.findOne({name:createaccount.data.name,email:createaccount.data.email})
    
    if(user){
        res.status(401).send("user already exists")
        return;
    }
    const newuser= new User({
        name,
        email,
        password,
    })
    
    await newuser.save()
    res.send("hello "+name+" your account created successfully")
    
    
})

router.post('/login',async(req,res)=>{
    const loginprops= loginschema.safeParse(req.body)
    
    if(!loginprops.success){
        res.send("invalid credentials")
        return
    }
    
    
    let loginname= loginprops.data.name
    let loginpassword= loginprops.data.password
     const user=await User.findOne({name:loginname,password:loginpassword})
     
     if(user){
        const token= jwt.sign({id:user._id},secret,{
            expiresIn:'1h'
        })
        res.cookie("jwt",token,{maxAge:60*60*1000,httpOnly:true})
            
        
        
        return res.status(200).json({
            name:user.name,
            password:user.password,
            cookies:token
        });
        
     }
     else{
        res.status(400).send("please enter correct user and password")
     }
    })

router.get('/logout',(req,res)=>{
    try{
        res.clearCookie("jwt",{httpOnly:true})
        
        res.send("logged out")
    }catch(error){
        res.status(401).send("internal error")

    }
    
})

router.get('/',routerprotection,async(req,res)=>{
    try{
        const loggedinuser= req.user._id;

        const filteredusers= await User.find({_id:{$ne:loggedinuser}}).select("-password");
        res.status(200).json(filteredusers)
        console.log(filteredusers);
    }
    catch(error){
        console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });

    }
})


module.exports=router