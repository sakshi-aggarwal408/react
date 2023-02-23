const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const api=require('./route')
const port=process.env.express||2345;
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/dresses';
mongoose.connect(url).then((res)=>{

    if(res){ 
        try{
            console.log("database connected")
        }
        catch(err){
            console.log(err)
        }
    }

})
app.use(bodyparser.urlencoded({extended:false}));
app.use('',api);

app.listen(port,()=>{
    try{
        console.log("server created",port)
    }
    catch(err){
        console.log(err)
    }
})
