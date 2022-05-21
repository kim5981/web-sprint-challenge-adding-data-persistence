/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema

    .createTable("projects", tbl => {
        tbl.increments("project_id")
        tbl.string("project_name", 35)
            .notNullable()
        tbl.string("project_description", 150)
        tbl.boolean("project_completed")
            .defaultTo("false")
    })
    
    .createTable("resources", tbl => {
        tbl.increments("resource_id")
    })
    
    .createTable("tasks", tbl => {
        tbl.increments("task_id")
    })

    .createTable("project_resources", tbl => {
        tbl.increments()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
  .dropTableIfExists("project_resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
