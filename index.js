const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
// const brcypt = require("brcypt");

app.use(express.json());

//geting Routers
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");


//using routers with the help of middelware
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);



// only start if database is up (online);
async function main() {
    await mongoose.connect("mongodb+srv://neeraj7682:Neeraj%4018104@cluster0.mvaon.mongodb.net/Coursera-app");
    app.listen(3000, () => {
        console.log("server is listing at port 3000");
    })
} 

main().then(() => {
    console.log("Db is connected successfully");
})

