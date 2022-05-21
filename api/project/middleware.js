const Projects = require("./model")

const checkCompleted = async (req, res, next) => {
    await Projects.get()
        .then( projects => {
           projects.map( p => {
               p.project_completed === 0 ? 
               p.project_completed = false :
               p.project_completed = true
           })
           res.status(200).json(projects)
        })
        .catch(next)
}

module.exports = {
    checkCompleted
}