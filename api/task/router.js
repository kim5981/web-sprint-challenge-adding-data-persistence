// build your `/api/tasks` router here
const router = require("express").Router()

const Task = require("./model")

router.get("/", (req, res, next) => {
    Task.getTasks()
    .then(task => {
        res.json("getting tasks")
    })
    .catch(next)
})


module.exports = router