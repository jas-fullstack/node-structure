import express from "express";
const adminLogin = express.Router();

adminLogin.get("/admin/login",(req,res)=>{
    res.send("admin router is working")
})

export default adminLogin;