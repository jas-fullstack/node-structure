import express from "express";
const register = express.Router();

register.get("/register",(req,res)=>{
    res.send("register is working")
})

export default register;