
const {Router} = require("express");
const courseRouter  = Router();

courseRouter.get("/purcheses", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})
courseRouter.get("/preview", (req, res) => {
    res.json({
        message: "hello i am root ",
    })
})

module.exports ={
    courseRouter: courseRouter,
}

