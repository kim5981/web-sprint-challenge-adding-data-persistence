//* TASK MODEL

const db = require("../../data/dbConfig")

function getTasks(){
    return db("tasks as t")
    .select("t.*", "p.project_name", "p.project_description")
    .join("projects as p" ,"p.project_id", "t.project_id")
}

module.exports = {
    getTasks
}