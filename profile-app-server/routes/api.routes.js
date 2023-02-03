const router = require("express").Router();

const User = require("../models/User.model");
const { isAuthenticated }= require("../middlewares/jwt.middleware");
const fileUploader = require("../config/cloudinary.config")



router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    // console.log("file is: ", req.file)
   
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    
    res.json({ fileUrl: req.file.path });
  });

  router.put('/upload/:id', (req,res)=>{
    console.log(req.body)
    const { imageUrl, user} = req.body
    user.image = imageUrl
    console.log(user)
    User.findByIdAndUpdate(user._id, {image: user.image}, {new:true})
        .then(userUpdated=>{
            console.log("updated in DB")
            console.log(userUpdated)
            res.json({user: userUpdated})
        })
  })














module.exports = router;