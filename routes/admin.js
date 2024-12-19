const { Router } = require("express");
const adminRouter = Router(); // router is function 

const adminModel = require("../db")

adminRouter.post("/signup", (req, res) => {
    res.json({
        message: "admin endpoint ",
    })
})
adminRouter.post("/signin", (req, res) => {
    res.json({
        message: "admin endpoint ",
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