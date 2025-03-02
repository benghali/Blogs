import {db} from '../db.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"




export const register =(req, res)=>{

    //nthabtou  ke fama existing user
    const q="SELECT * FROM users WHERE email = ? OR username = ?"

db.query(q,[req.body.email,req.body.username],(err,data)=>{

if (err) return res.json (err);

if(data.length) return res.status (409).json("user already exists");
 //if user already exist we can't create it
// hashing the password and create a user 

//https://www.npmjs.com/package/bcryptjs
// To hash a password:
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);
const salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.password,salt);

const q ="INSERT INTO users (`username`,`email` ,`password`) VALUES (?)"
const values =[
req.body.username,
req.body.email,
// req.body.password
hash,  //we will use this hash password 

]
db.query(q,[values],(err,data)=>{
    if (err) return res.json (err);
return res.status(200).json("user created successfully");

})

})
    }
    export const login =(req, res)=>{
        // first thing  we will check  if the user exist or not   
    
        const q ="SELECT * FROM users WHERE username = ?"
    
        db.query(q[req.body.usename],(err,data)=>{

if(data.length ===0) return res.status(404).json("user not found ")
// data.length===0 ma3neha we don't have any user with this username in db ok !

//second check the password : 


const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password);

if (!isPasswordCorrect) return res.status(400).json("your username ou password are incorrect")
// install ( npm i jsonwebtoken)


const token = jwt.sign({id:data[0].id}, "jwtkey");

//return user information and send this token as cookie 
const { password, ...other} =data[0]
// don't forget to install cookie parser (npm i cookie-parser)
res.cookie("access_token", token,{
    httpOnly: true
// we setting the cookie by token,


}).status(200).json(other)
        })
    
    
    }
    export const logout =(req, res)=>{
        // we clearing the cookie by token
    res.clearCookie("acces_token",{
        sameSite:"",
        secure: true

    }).status(200).json("user logged out.")
    
    };
    
    