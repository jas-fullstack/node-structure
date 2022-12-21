import express from "express";
import { loginUser } from '../../controller/users/login.js'
const login = express.Router();

login.get("/",(req,res)=>{
    try {
        const data = loginUser();
        res.send(data)
    } catch (error) {
        
    }
    
})

export default login;