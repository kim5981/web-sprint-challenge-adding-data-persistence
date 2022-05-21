const Projects = require("./model")
const db = require("../../data/dbConfig")

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

const validateProject = async (req, res, next) => {
    const { project_name } = req.body
    if( 
        !project_name.trim() ||
        project_name === undefined 
    ){
        next({
            status: 400,
            message: "missing or invalid project_name"
        })
    } else {
        next()
    }
}

const checkProjectId = async (req, res, next) => {
    try{
        const id = await db("projects")
        .where("project_id", req.params.project_id)
        .first()

        !id 
        ? next({ status: 400, message: `id ${req.params.project_id} is invalid`}) 
        : next()

    } catch(err){
        next(err)
    }
}

module.exports = {
    checkCompleted,
    validateProject,
    checkProjectId
}