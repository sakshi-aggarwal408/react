const express=require('express');
const router=express.Router();
const Schema=require('./Schema')
router.post('/postData',async(req,res)=>{
    const{name,size,rate}=req.body;
    try{
    const store=new Schema({name,size,rate});
    const save=await store.save();
    res.status(201).json({
        success:true,
        data:{
            save
        }
    })
}
catch(err){
    console.log(err)
}
})


module.exports=router