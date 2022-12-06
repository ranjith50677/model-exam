import "./App.css"
// import { useContext } from "react";
import userContext  from "./context";
import React from "react";
import { useContext } from "react";
import { useFormik } from "formik";
import axios from 'axios';
import {Link} from 'react-router-dom';


// import { useState } from "react";


export default function CreateAccount() {
     const [show, setShow] = React.useState(true);
let userCtx=useContext(userContext)

async function handle(){
  const url="http://localhost:4000/api/bank/register"
  await axios.post(url,{
    firstname:formik.values.firstname,
    lastname:formik.values.lastname,
    email:formik.values.email,
    password:formik.values.password
  })
  .then(res=>{
    if(res.status===400){
      alert("Something Went Wrong");
    }
  })
  .catch(error=>{
    alert(error.response.data)
  })
}

const formik = useFormik({
   
  initialValues: {
      firstname:"",
      lastname:"",
      email: "",
      password:"",
      balance:0
    },

    onSubmit: (values) => {
      alert("Account Succesfully Created")
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

  return (
    <>
    {""} 
     {show ? (
    <div className="box">
      <h3  className="heading">Create Account</h3>
      <hr></hr>
    <form class="row g-3 needs-validation" novalidate onSubmit={formik.handleSubmit}>
  <div class="cform">
    <label for="validationCustom01" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstname" placeholder="Enter FirstName" required
     value={formik.values.firstname}
     onChange={formik.handleChange}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="cform">
    <label for="validationCustom02" class="form-label">movie name</label>
    <input type="text" class="form-control" id="lastname" placeholder="Enter MovieName" required
     value={formik.values.lastname}
     onChange={formik.handleChange}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

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
    <Link to={`/login`} >
    <button class="btn btn-danger" type="submit" onClick={handle} >Create Account</button>
    </Link>
  </div> 
</form>
</div>
 ) : (
   <>
  
  <h5 class="success">Successfully Created!</h5>
 </>
 )
 }

    </>
  )
}
