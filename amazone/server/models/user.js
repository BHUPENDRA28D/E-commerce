const mongoose =require('mongoose');
const userSchema = mongoose.Schema({
    name: { type : String , required : true ,trim:true},  // username of the user
    email:{type:String,required:true,trim:true,validate:{
        validator: function(v){
            const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return v.match(re);

        },
        message:'Please Enter a valide email address'
    }},         // User's Email ID
    password:{type:String,required:true,
        validate:{
            validator: function(v){
    
                const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
      return v.match(re);
    
            },
            message:'Please enter password according to\n At least one lowercase alphabet i.e. [a-z]\nAt least one uppercase alphabet i.e. [A-Z]\nAt least one Numeric digit i.e. [0-9]\nAt least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]\nAlso, the total length must be in the range [8-15]\n'
        }
    
    },      // Password for the user

    address:{
        type:String,
        default:'',
    },
    type:{
        type:String,
        default:'users',
    }
    //cart
});

const  User=mongoose.model("User",userSchema) ;
module.exports=User;
