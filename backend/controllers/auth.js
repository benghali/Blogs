
import {db} from '../db.js'
import bcrypt from 'bcryptjs';


export const register =(req, res)=>{
const q= "SELECT * users WHERE email= ? OR username= ?";
db.query(q,[req.body.email,req.body.name],(err,data)=>{
    if(err){
        res.json(err);
    }
    if(data.length){
        res.status(409).json("user already exists");
    }
})
    //nthabtou  ke fama existing user
    const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
    }
    export const login =(req, res)=>{
    
    
    
    
    }
    export const logout =(req, res)=>{
    
    
    }   
    
    