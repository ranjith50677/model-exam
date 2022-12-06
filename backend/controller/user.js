import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../models/userSchema.js"
import Joi from "joi"
import user from '../middleware/user.js';


const saltRounds=10;

const schema = Joi.object({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required()
})

const logschema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().required()
  })
//register 
const register= async (req, res) => {
    const { error } =schema.validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const email=req.body.email;
    const exUser= await User.findOne({email:email})
    if(exUser){
      res.send('Email is already taken')
    }
    else{
        bcrypt.hash(req.body.password,saltRounds,async function (err,hash){
          let user = new User({ 
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email: req.body.email,
            password: hash
          });
          user = await  user.save();
          console.log(user);
          res.send(user);
      })
    }
  };



 //login user
 
  
  const login= async (req, res) => {
      const { error } =logschema.validate(req.body); 
      if (error) return res.status(400).send(error.details[0].message);
    
      const email=req.body.email;
      const password=req.body.password
      const exUser= await User.findOne({email:email})
      if(exUser){
         bcrypt.compare(password,exUser.password,async function(err,result){
                if (result) {
                  let data=exUser.toObject();
                      const token=jwt.sign({_id:data._id,isCustomer:exUser.isCustomer,email:exUser.email},process.env.JWT_KEY)
                      // res.send(token)
                      res.header("x-auth",token).send(token)
                }else{
                    res.send("Acces Denied")
                }
          }) 
      }
      else{
        res.send('Your mail id and password is not matching')
      }
    
    
    };

//View all user

const getAllUser=(req,res)=>{
  async function Data(){
     
  try{
     
      // console.log(req.user.hostelName);
      
     const result=await User.find().select('-password')
       return   res.status(200).send(result);
     

  }
  catch (error) {
    return  res.status(400).send(error.message)
   }
}
Data();
}


  
//deposit
const MovieBooking=async (req,res)=>{  
      
   
  try {
      let updatereg=await  User.find({email:req.user.email})
      
      if(updatereg.length<=0) return res.status(400).send('No User Available')             
          let bal=Number(updatereg[0].balance)
          const value=Number(req.body.MovieBooking);
          const add=value+bal;
          console.log(value);
              const update=await  User.findOneAndUpdate({email:req.user.email},{$set:{MovieBooking:add,balance:add}},{new:true})
      return res.status(200).send(update)
  } 

       catch (error) {
      return res.status(400).send(error.message)
  }
}

// //withdraw

// const withdraw=async (req,res)=>{  
      
   
//   try {
//       let updatereg=await  User.find({email:req.user.email})
    
//       if(updatereg.length<=0){
//            return res.status(400).send('No User Avaliable')}                
//       if(updatereg.length>=0){
//           const value=Number(req.body.withdraw);
//           if(value<updatereg[0].balance)
//           {
//           const sub=Number(updatereg[0].balance)-Number(value);
//               const update=await  User.findOneAndUpdate({email:req.user.email},{$set:{withdraw:sub,balance:sub}},{new:true})
//       return res.status(200).send(update)
//           }
//           else{
//               res.status(400).send('Insufficient Balance');
//           }
//   } 
//   }
//        catch (error) {
//       return res.status(400).send(error.message)
//   }}

  //view profile

  const myprofile=async(req, res) => {
    
    const users = await User.find({email:req.user.email}).select('-password');
    res.send(users);
  }; 




export {register,login,MovieBooking,getAllUser,myprofile}