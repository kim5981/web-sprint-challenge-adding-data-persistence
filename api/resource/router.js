const router = require("express").Router()

const Resource = require("./model")

const {
    validateResource,
    checkExisting
} = require("./middleware")

router.get("/", (req, res, next) => {
    Resource.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.post("/", validateResource, checkExisting, (req, res, next) => {
    Resource.createResource(req.body)  
    .then(() => {
            res.status(201).json({
                ...req.body,
                resource_name: req.body.resource_name
            })
    })
    .catch(next)
    })


module.exports = router