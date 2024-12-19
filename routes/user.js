// const express  = require("express");
// const Router = express.Router;

const { Router } = require("express");
const { model } = require("mongoose");
const userRouter = Router(); // router is function 

userRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoint ",
    })
})
userRouter.post("/signin", (req, res) => {
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