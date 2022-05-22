const router = require("express").Router()

const Task = require("./model")

const {
    checkExistingProjectId,
    validateTask
    } = require("./middleware")

router.get("/", (req, res, next) => {
    Task.getTasks()
    .then(tasks => {
        tasks.map( t => {
            t.task_completed === 0 ? 
            t.task_completed = false :
            t.task_completed = true
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
    .then(t => {

        t.task_completed === 0 || t.task_completed === "false"
        ? t.task_completed = false
        : t.task_completed === 1 || t.task_completed === "true"
        ? t.task_completed = true
        : next()
    
            res.status(201).json(t)
    })
    .catch(next)
})


module.exports = router