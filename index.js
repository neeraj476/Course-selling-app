const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { z } = require("zod");
const jwt = require("jsonwebtoken");

//geting Routers
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");


//using routers with the help of middelware
app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter);





























app.listen(3000, () => {
    console.log("server is listing at port 3000");
})