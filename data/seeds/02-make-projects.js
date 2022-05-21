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

// resources used across all projects
const resources = [
      { resource_name: "Stack Overflow" },
      { resource_name: "The Hub", resource_description: "BloomTech resource for learners" },
      { resource_name: "Youtube" },
      { resource_name: "Canvas", resource_description: "Warm up materials for daily projects" },
      { resource_name: "Solution video", resource_description: "Sage advice from Gabe found in solution video" },

]

const tasks = [
     { 
        task_description: "Write db access functions with knex",
        task_notes: "study api calls",
        task_completed: true,
        project_id: 1
      },
      { 
        task_description: "Install dependencies",
        task_completed: true,
        project_id: 2
      },
      { 
        task_description: "Install dependencies",
        task_completed: true,
        project_id: 1
      },
      { 
        task_description: "Cry",
        project_id: 4
      },
      { 
        task_description: "Set up server",
        task_completed: true,
        project_id: 3
      },
      { 
        task_description: "Set up server",
        task_completed: true,
        project_id: 2
      },
      { 
        task_description: "Set up server",
        task_completed: true,
        project_id: 4
      },
]

// where projects crossed with resources
const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 5 },
    { project_id: 2, resource_id: 5 },
    { project_id: 3, resource_id: 5 },
    { project_id: 4, resource_id: 5 },
    { project_id: 3, resource_id: 1 }
]

exports.seed = async function(knex){
    await knex("projects").insert(projects)
    await knex("resources").insert(resources)
    await knex("tasks").insert(tasks)
    await knex("project_resources").insert(project_resources)
}