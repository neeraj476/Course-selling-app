const { Router } = require("express");
const adminRouter = Router(); // router is function 

const {adminModel} = require("../db")

const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD  ="alald12314efds24";

adminRouter.post("/signup",async (req, res) => {
    const{email ,password,firstName, lastName} = req.body;
    // adding zod validation 
    // TODO : hash the password so plaintet pw in not stored in the DB 
    
    // TOdo put inside a try catch block
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
     })

    res.json({
        message: "signup succeeded ",
    })
})
adminRouter.post("/signin",async (req, res) => {
    const { email,password} = req.body;
    const admin = await adminModel.findOne({
        email:email,
        password:password
    })
    if(admin){
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);


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
adminRouter.post("/", (req, res) => {
    res.json({
        message: "hello i am admin ",
    })
})
adminRouter.put("/", (req, res) => {
    res.json({
        message: "hello i am admin ",
    })
})
adminRouter.get("//bulk", (req, res) => {
    res.json({
        message: "hello i am admin ",
    })
})

module.exports = {
    adminRouter : adminRouter,
}