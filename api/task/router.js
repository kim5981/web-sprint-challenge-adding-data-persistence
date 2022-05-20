// build your `/api/tasks` router here
const router = require("express").Router()

const Task = require("./model")

router.get("/api/tasks", (req, res, next) => {
    Task.getTasks()
    .then(() => {
        res.json("getting tasks")
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: "yikes",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router