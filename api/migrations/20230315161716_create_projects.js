/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments('id').primary();
        table.string('title');
        table.date('start_date');
        table.date('end_date');
        table.integer('budget');
        table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects')
};
