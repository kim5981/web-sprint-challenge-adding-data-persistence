//* TASKS ROUTER

const router = require("express").Router()

const Task = require("./model")

router.get("/", (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(next)
})



module.exports = router