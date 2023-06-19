let usermodel=reqire("../model/user")
let bcrypt=reqire('bcrypt')
var jwt=require('jsonwebtoken')
let adduser=async(req,res)=>{
    let result=await usermodel.findById({"_id":req._id})
    if(result){
        res.send("user data available")
    }
    else{
        let pwdhash=await bcrypt.hash(req.body.password,10)
        let newdata={...req.body,"password":pwdhash}
    
    let data=new usermodel(newdata)
    data.save().then(()=>{
        res.send("ok")
    }).catch((err)=>{
        console.log(err)
    })
}
}
let login =async(req,res)=>{
    let result=await usermodel.findById({"_id":req.body._id})
    if(result){
        let rs=await bcrypt.compare(req.body.password,result.password)
        if(rs){
            let token=jwt.sign({"_id":req.body._id},"rsr")
            res.json({"token":token})
        }
        else{
            res.send("mail id is wrong")
        }

        }
    else{
        res.send("mail id is worng")
    }

    }
let isAuth=(req,res,next)=>{
    try{
        let rs=jwt.verify(req.headers.autherization(rsr))
        if(rs){
            next()
        }
    }
    catch(err)=>{
        res.send("provide valid token?")
    }
}


let isAdmin=async(req,res,next)=>{
    let data=await usermodel.findById({"_id":req.headers.id})
    if (data.role==101){
        next()
    }
    else{
        res.send("you are not allowed tok add product")
    
    }
}
module.exports={adduser,login,isAuth,isAdmin}