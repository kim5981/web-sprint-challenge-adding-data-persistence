//* ROUTER MODEL

const router = require("express").Router()

const Resource = require("./model")

router.get("/", (req, res, next) => {
    Resource.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})



module.exports = router