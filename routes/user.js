// const express  = require("express");
// const Router = express.Router;

const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router(); // router is function 
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD  ="alald124";

userRouter.post("/signup",async (req, res) => {
    const{email ,password,firstName, lastName} = req.body;
    // adding zod validation 
    // TODO : hash the password so plaintet pw in not stored in the DB 
    
    // TOdo put inside a try catch block
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
     })

    res.json({
        message: "signup succeeded ",
    })
})
userRouter.post("/signin",async (req, res) => {
    const { email,password} = req.body;
    const user = await userModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token = jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);


        //do cookie logic
        res.json({

            token:token
        })
    }else{
        res.status(403).json({
            message:"user not exits",
        })
    }
    res.json({
        message: "hello i am root ",
    })
})
userRouter.post("/purcheses", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})

module.exports = {
    userRouter : userRouter,
}