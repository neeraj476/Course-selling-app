const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

//geting Routers
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");

async function main() {
    await mongoose.connect("mongodb+srv://neeraj7682:Neeraj%4018104@cluster0.mvaon.mongodb.net/Course-Selling-App");
}

main().then(() => {
    console.log("Db is connected successfully");
})


//using routers with the help of middelware
app.use("/user",userRouter);
app.use("/course",courseRouter);





























app.listen(3000, () => {
    console.log("server is listing at port 3000");
})