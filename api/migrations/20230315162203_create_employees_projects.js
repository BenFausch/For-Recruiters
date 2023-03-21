/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('employees_projects', function (table) {
        table.integer('project_id').unsigned();
        table.foreign('project_id').references('projects.id');
        table.integer('employee_id').unsigned();
        table.foreign('employee_id').references('employees.id');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('employees_projects');
};
