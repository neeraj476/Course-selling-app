const { Router } = require("express");
const adminRouter = Router(); // router is function 

const adminModel = require("../db")

adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "signup endpoint ",
    })
})
adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
adminRouter.post("/course", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
adminRouter.put("/course", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})

module.exports = {
    adminRouter : adminRouter,
}