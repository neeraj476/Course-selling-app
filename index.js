const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

async function main() {
    await mongoose.connect("mongodb+srv://neeraj7682:Neeraj%4018104@cluster0.mvaon.mongodb.net/Course-Selling-App");
}

main().then(() => {
    console.log("Db is connected successfully");
})

app.post("/user/signup", (req, res) => {
    res.json({
        message: "signup endpoint ",
    })
})
app.post("/user/signin", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
app.post("/user/purcheses", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
app.get("/course/purcheses", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
app.get("/courses", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})






























app.listen(3000, () => {
    console.log("server is listing at port 3000");
})