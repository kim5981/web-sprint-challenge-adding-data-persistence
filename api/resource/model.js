const db = require("../../data/dbConfig")

function get(){
    return db("resources")
}

function getResourceByName(name){
    return db("resources").where("resource_name", name).first()
}

async function createResource(resource) {
    const [resource_name] = await db("resources").insert(resource)
    return getResourceByName({ resource_name })
}

module.exports = {
    get,
    getResourceByName,
    createResource
}