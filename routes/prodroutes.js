let express= require('express')
let {savedata,upload}=require('../controlers/prod')
let route=new express.Router()
route.post("/save",upload.singile('profimg'),savedata)
model.expo