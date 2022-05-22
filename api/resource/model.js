const db = require("../../data/dbConfig")

function get(){
    return db("resources")
}

function getResourceByName(name){
    return db("resources").where("resource_name", name).first()
}

async function createResource(resource) {
    return db("resources")
    .insert(resource)
    .then( ([resource_name]) => {
        return db("resources").where("resource_name", resource_name).first()
    })
}


module.exports = {
    get,
    getResourceByName,
    createResource
}