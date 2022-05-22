//* TASKS ROUTER

const router = require("express").Router()

const Task = require("./model")

const {
    checkCompleted
} = require("./middleware")

router.get("/", (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        tasks.map( task => {
            task.task_completed === 0 ? 
            task.task_completed = false :
            task.task_completed = true
        })
        res.json(tasks)
    })
    .catch(next)
})



module.exports = router