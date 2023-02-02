const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const saltRounds = 10;

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


router.post("/signup", (req,res)=>{
  console.log("received")
  const {username,password,campus,course} = req.body
  console.log(req.body)

  User.findOne({username})
    .then(userFound=>{
      if (!userFound){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt)
        User.create({username,password:hashedPassword,campus,course})
        .then(DBresponse=>{
          console.log(DBresponse)
          const {username, campus, course, _id } = DBresponse
          const user = {username,campus,course,_id}
          res.status(200).json({user:user})
        })

        
      }
      else if (userFound){
        res.status(400).json({ message: "User already exists." });
        return;
      }
    })
  

})

router.post('/login', (req,res)=>{
  console.log(req.body)
  const {username, password} = req.body
  User.findOne({username})
    .then(foundUser=>{
      if (!foundUser){
        res.json({message:"User does not exist!"})
        return;
      }
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password)

      if (passwordCorrect){
        const {username, course, campus, _id} = foundUser
        const payload = {username,course,campus,_id}
        const authToken = jwt.sign(
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "12h" }
        )
        res.status(200).json({ authToken: authToken })
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
      
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error" }))

})

module.exports = router;
