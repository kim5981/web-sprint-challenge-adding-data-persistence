const Tasks = require("./model")
const Projects = require("../project/model")

const checkCompleted = async (req, res, next) => {
    await Tasks.getTasks()
        .then( tasks => {
           tasks.map( task => {
               task.task_completed === 0 ? 
               task.task_completed = false :
               task.task_completed = true
           })
           next()
        })
        .catch(next)
}

const checkExistingProjectId = async (req, res, next) => {
    try{
        const { project_id } = req.body
        const existingProjectId = await Projects.getProjectById(project_id)
        
        !existingProjectId
        ? next({ status: 400, message: ` project_id ${project_id} does not exist` })
        : next()
    
    }catch(err){
        next(err)
    }
}

const validateTask = async (req, res, next) => {
     const { task_description } = req.body

     !task_description || !task_description.trim()
     ? next({ status: 400, message: "incomplete or invalid task_description" })
     : next()  
 }


module.exports = {
    checkCompleted,
    checkExistingProjectId,
    validateTask
}