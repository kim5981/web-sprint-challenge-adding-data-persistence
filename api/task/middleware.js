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
        const existingProjectId = await Projects.getProjectById(req.body.project_id)
        if(!existingProjectId){
            next({
                status: 400,
                message: ` project_id ${req.body.project_id} does not exist`
            })
        } else {
            next()
        }
    }catch(err){
        next(err)
    }
}

const validateTask = async (req, res, next) => {
     const { task_description } = req.body

    if( 
        !task_description
        || !task_description.trim() 
    ){
        next({ 
            status: 400, 
            message: "incomplete or invalid task_description"
         })
    } else {
        next()
    }   
 }


module.exports = {
    checkCompleted,
    checkExistingProjectId,
    validateTask
}