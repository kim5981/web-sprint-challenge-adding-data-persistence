const db = require("../../data/dbConfig")

function get(){
    return db("resources")
}

module.exports = {
    get
}