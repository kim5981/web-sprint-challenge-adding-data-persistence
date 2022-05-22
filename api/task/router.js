//* TASKS ROUTER

const router = require("express").Router()

const Task = require("./model")

const {
    checkExistingProjectId,
    validateTask
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

router.post("/", 
validateTask, 
checkExistingProjectId, 
async (req, res, next) => {
    Task.createTask(req.body)
    .then(task => {
        if (
            task.task_completed === 0 
            || task.task_completed === "false" 
        ){
            task.task_completed = false
        } else if (
             task.task_completed === 1 
             || task.task_completed === "true" 
        ){
            task.task_completed = true
        }
            res.status(201).json(task)
    })
    .catch(next)
})


module.exports = router