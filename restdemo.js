const express=require('express');
const app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({ extended:true })
/*app.get('/',function(req,res){
  res.send(["Ram","Ravi","Mahesh"])
})*/
app.use(bodyParser.json());
const users=[
  {id:1, name:'Ram'},
  {id:2,name:'Manoj'}
];
app.get('/api/users',function(req,res){
  res.send(users);
})
app.get('/api/users/:id',(req,res)=>{
  const u=users.find(c=>c.id===parseInt(req.params.id))
  res.send(u);
})
app.post('/api/users/insert',urlencodedParser,(req,res)=>{
  const user={
    id:users.length+1,
    name:req.body.name
  };
  users.push(user);
  res.send(user);
})
//updation
app.post('/api/users/update/:id',urlencodedParser,(req,res)=>{
  const u=users.find(c=>c.id===parseInt(req.params.id))
  u.name=req.body.name;
  res.send(u);
})
app.get('/api/users/delete/:id',urlencodedParser,(req,res)=>{
  const u=users.find(c=>c.id===parseInt(req.params.id))
  const index=users.indexOf(u);
  users.splice(index,1);
  res.send(u);
})
const server=app.listen("8000","localhost",function()
{
  console.log("Server is running...");
})
