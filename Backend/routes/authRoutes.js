const express=require("express");

const router=express.Router();


module.exports=(req,res)=>{
  res.status(200).json({
    message:"This is Auth Router",
    status:'success'
  })
}