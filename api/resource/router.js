//* ROUTER MODEL

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
    .then(resource => {
            res.status(201).json(resource)
    })
    .catch(next)
    })


module.exports = router