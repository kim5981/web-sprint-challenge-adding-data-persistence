//* PROJECT MODEL

const db = require("../../data/dbConfig")

function get(){
    return db("projects")
    .select("*")
}

module.exports = {
    get
}