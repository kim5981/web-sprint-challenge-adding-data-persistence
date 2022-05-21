//* PROJECT ROUTER 

const router = require("express").Router()
const {
    checkCompleted
} = require("./middleware")

const Project = require("./model")

router.get("/", checkCompleted, (req, res, next) => {
    Project.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})


module.exports = router