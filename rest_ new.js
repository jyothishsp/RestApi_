const express=require('express')
const app=express()
app.get('/',function(req,res){
  res.send(["Ram","Ravi","Mahesh"])
})
const server=app.listen("8000","localhost",function()
{
  console.log("Server is running at port:"+%s);
})
