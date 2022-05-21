//* PROJECT ROUTER 

const router = require("express").Router()
const {
    checkCompleted,
    validateProject,
    checkProjectId,
} = require("./middleware")

const Project = require("./model")

router.get("/", checkCompleted, (req, res, next) => {
    Project.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.get("/:id"), checkCompleted, checkProjectId, (req, res, next) => {
    const { project_id } = req.params

    Project.getProjectById(project_id)
    .then(project => {
        res.json(project)
    })
    .catch(next)
}

/**
 * {
 * "project_id":1,
 * "project_name":"bar",
 * "project_description":null,
 * "project_completed":false
 * }
 */

router.post("/"), validateProject, checkCompleted, (req, res, next) => {
    const project = req.body
    Project.create(project)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
}


module.exports = router