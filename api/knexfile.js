// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'pg',
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "test_postgres_db"
  }
};
