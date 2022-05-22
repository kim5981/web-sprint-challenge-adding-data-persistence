const Tasks = require("./model")

const db = require("../../data/dbConfig")

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

module.exports = {
    checkCompleted
}