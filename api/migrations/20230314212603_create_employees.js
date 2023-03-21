/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('employees', function (table) {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.integer('salary');
        table.integer('department_id');
        table.timestamps();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('employees')
};
