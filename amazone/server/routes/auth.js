const express = require("express");
const User = require("../models/user");






const authRouter = express.Router();


// authRouter.get('/user',(req,res)=>{
//   res.json({msg:'amazone clone'});
// })

authRouter.post("/register", async (req, res)=> {
        /*   1.get the data from the client.
          2.post the data in database.
          3.return that data to the user.*/


       const {name, email, password}= req.body;

        /*{
          'name': name , "email" :email, 'password': password
         }*/
         const existingUser =await User.findOne({email});  //check if this email is already registered or not.
         if(existingUser){
            return res.status(400).json({message:" User with same email already exist!"});
         }
       let user =  new  User({
            email,
            password,
            name,
         })
         user =await user.save();

       
      


        
});

//EXPORTING THE FILE
module.exports=authRouter;  //this is the exported module that can be imported in other files