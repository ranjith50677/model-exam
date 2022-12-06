import "./App.css";
import { useFormik } from "formik";
//import { useState } from "react";
import React,{ useContext, useState } from "react";
import userContext from "./context"; 
import axios from "axios";

export default function Login(){
let userCtx=useContext(userContext)
const [show, setShow] = React.useState(true);
const[values,setValues]=React.useState({
  email:'',
  password:''
})

async function handle(){
 
  const url="http://localhost:4000/api/bank/login"
  await axios.post(url,{
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    console.log(res.data);
    localStorage.setItem('x-auth',res.data)
    let token=localStorage.getItem('x-auth')
    // console.log(token)
  })
  .catch(error=>{
    alert("Something Went Wrong")
  })
}
 
const formik = useFormik({
   
  initialValues: {
      email: "",
      password:"",
      balance:0
    },

    onSubmit: (values) => {
      alert("Logged in Succesfully")
      handle()
      userCtx.users.push(values)
      console.log(values)
    },

    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if(!values.password) errors.password="Required"
      return errors;
    }
  });


  
    return(
        <>
        {""} 
     {show ? (
    <div className="box">
      <h3  className="heading">Login</h3>
      <hr></hr>
    <form class="row g-3 needs-validation" novalidate onSubmit={formik.handleSubmit}>

  <div class="cform">
    <label for="validationCustom02" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Mail-Id" required
     value={formik.values.email}
     onChange={formik.handleChange}/>
    <div class="valid-feedback">
      Looks good!
    </div>
    
  </div>
  
  <div class="cform">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required
    value={formik.values.password}
    onChange={formik.handleChange}/>
    <div class="invalid-feedback">
      Please provide a max 8 chacter.
    </div>
  </div>
    <div class="col-12">
    <button class="btn btn-danger" type="submit" onClick={handle}>Login</button>
  </div> 
</form>
</div>
 ) : (
   <>
  
  <h5 class="success">Successfully LoggedIn!</h5>
 </>
 )
 }
        </>
    )
}