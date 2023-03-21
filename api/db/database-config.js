const knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        user: "postgres",
        password: "postgres",
        database: "test_postgres_db"
    }
});

module.exports = knex