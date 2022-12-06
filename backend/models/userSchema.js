import mongoose from 'mongoose'
import express from 'express'

const user={
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    moviebooking:{
        type:Number,
        default:0
    },
    balance:{
        type:Number,
        default:0
    },
    isCustomer:{
        type:Boolean,
        default:true
    }

}

const User=mongoose.model('User',user)

export default User