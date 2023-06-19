let multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upimg')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
    }
  })
  
  const upload = multer({ storage: storage })
  let savedata =(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    res.send("ok")
  }
  moule.exports= {savedata,upload} 

  