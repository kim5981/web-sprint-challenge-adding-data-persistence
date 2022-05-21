//* PROJECT ROUTER 

const express = require("express")
const Project = require("./model")
const router = express.Router()

const {
    checkCompleted,
    validateProject,
    checkProjectId,
} = require("./middleware")



router.get("/", checkCompleted, (req, res, next) => {
    Project.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.get("/:project_id", checkCompleted, checkProjectId, (req, res, next) => {
    const { project_id } = req.params

    Project.getProjectById(project_id)
    .then(project => {
        res.json(project)
    })
    .catch(next)
})

router.post("/", validateProject, (req, res, next) => {
    const project = req.body
    Project.create(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
    })


module.exports = router