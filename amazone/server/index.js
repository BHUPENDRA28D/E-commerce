// console.log("hello World");
// IMPORTS FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

// IMPORTS FROM OTHER FILES

const authRouter = require('./routes/auth');


//INIT
const PORT = 3000;
const app = express();
const DB = 'mongodb+srv://outhide96:Bmd123@cluster0.qbn3vvc.mongodb.net/?retryWrites=true&w=majority'



// MIDDLEWARE
// CLIENT ->    middleware = > SERVER -> CLIENT


app.use(authRouter);  // app is the server, we are adding our router to it as a middleware so that every request has to go through this first before getting to its intended route.


//CONNECTIONS
mongoose.connect(DB).then(()=>{
  console.log("Connection Succesful");
})
.catch((e)=>{
  console.log(e);
});






// //  Creating an API  using expreess
// //   http://<youripaddress>/hello-world 

// app.get("/hello-world",(req,res)=>{
//     res.send("Hello world!" );
// })
// app.get("/hello-world",(req,res)=>{
//     res.json({naem :"Anuj Task!"} );
// })


// // GET, PUT , POST ,DELETE ,UPDATE = CRUD


   app.listen(PORT,function(){
     console.log(`Connected at port ${PORT}`);//local host
   })
