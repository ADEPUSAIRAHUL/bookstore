let express = require('express')
let {adduser,login}=require('../controlers/user')
let userroute=new express.Router()
userrouter.post("/add",adduser)
userroutes.post("login",login)
module.exports=userroutes