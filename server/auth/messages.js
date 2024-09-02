const express= require('express')
const router= express.Router()
const Message= require('../db/messageModel')
const Conversation= require('../db/conversation')


router.post('/send/:id',async(req,res)=>{
    try{
        const {message}= req.body;
        const {id:receiverid}= req.params;
        const senderid= req.user._id;

        let chat= await Conversation.findOne({
            participant:{$all:[senderid,receiverid]},
        }) 
        if(!chat){
            chat= await Conversation.create({
                participant:[senderid,receiverid],
            })
        }
        let newmessage= new Message({
            senderid,
            receiverid,
            message,
        })
        if(newmessage){
            chat.messages.push(newmessage._id)
        }
        await chat.save()
        await newmessage.save()

        res.json(newmessage)

    }
    catch(error){
        res.status(401).send("internal error at message database")
        console.log("message not sent",error.message)

    }
})

router.get('/:id',async(req,res)=>{
    try{
        const {id:receiverid}= req.params;
        const senderid= req.user._id

        let chat= await Conversation.findOne({
            participant:{$all:[senderid,receiverid]},
        }).populate("messages")
        if(!chat){
            res.json([])
        }
        let message= chat.messages
        res.json(message)


    }
    catch(error){
        res.status(401).json({message:error.message})
        console.log("internal error at getting messages")
    }
})

module.exports= router