const projects = [
    { 
      project_name: "Module 1 Project",
      project_description: "Intro to Relational Databases",
      project_completed: true
    },
    { 
        project_name: "Module 2 Project",
        project_description: "Database Schema Design",
        project_completed: true
      },
      { 
        project_name: "Module 3 Project",
        project_description: "Multi-Table Queries",
        project_completed: true
      },
      { 
        project_name: "Module 4 Project",
        project_description: "Data Modeling",
        project_completed: true
      },
]

const resources = [
      { resource_name: "Stack Overflow" },
      { resource_name: "The Hub", resource_description: "BloomTech resource for learners" },
      { resource_name: "Youtube" },
      { resource_name: "Canvas", resource_description: "Warm up materials for daily projects" },
      { resource_name: "Solution video", resource_description: "Sage advice from Gabe found in solution video" },

]

const tasks = [

]

const project_resources = [

]

exports.seed = async function(knex){
    await knex("projects").insert(projects)
    await knex("resources").insert(resources)
    await knex("tasks").insert(tasks)
    await knex("project_resources").insert(project_resources)
}