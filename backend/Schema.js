const mongoose=require('mongoose');
const Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,

    },
    rate:{
        type:String,
        required:true
    }
})
const Userdata=mongoose.model('product',Schema);
module.exports=Userdata;