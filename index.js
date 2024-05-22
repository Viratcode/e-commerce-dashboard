const express=require('express');
require('./db/config.js');
const User=require('./db/User.js');

const app=express();
app.use(express.json())

 app.post("/register",async (req,resp)=>{
     resp.send(await req.body)
     console.log("api running");
 });

app.listen(6000);