//* PROJECT ROUTER 

const router = require("express").Router()
const Project = require("./model")

const {
    checkCompleted,
    validateProject,
    checkProjectId
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
    Project.create(req.body)  
    .then(p => {
        if (
            p.project_completed === 0 
            || p.project_completed === "false" 
        ){
            p.project_completed = false
        } else if (
             p.project_completed === 1 
             || p.project_completed === "true" 
        ){
            p.project_completed = true
        }
            res.status(201).json(p)
    })
    .catch(next)
    })


module.exports = router