const express = require("express")

const projectsRouter = require("./project/router")
const resourcesRouter = require("./resource/router")
const tasksRouter = require("./task/router")

const server = express()

server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/tasks", tasksRouter)

server.use("*", (req, res) => {
    res.json({ message: "an error occurred while fetching your data.."})
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: "yikes",
        message: err.message,
        stack: err.stack
    })
})


module.exports = server