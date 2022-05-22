//* TASKS ROUTER

const router = require("express").Router()

const Task = require("./model")

const {
    checkCompleted
} = require("./middleware")

router.get("/", checkCompleted, (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(next)
})



module.exports = router