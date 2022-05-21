//* PROJECT MODEL

const db = require("../../data/dbConfig")

function get(){
    return db("projects")
}

function getProjectById(id){
    return db("projects")
    .where("project_id", id)
    .first()
}

function create(project) {
    return db("projects")
    .insert(project)
    .then( ([id]) => {
        return db("projects")
        .where("project_id", id).first()
    })
}

module.exports = {
    get,
    create,
    getProjectById
}