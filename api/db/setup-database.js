/**
 * @file setup-database.js
 * @description Creates the postgres database, establishes the connected knex object, runs migrations
 */

const Knex = require('knex')

// These values would be in an .env file/key manager in a production situation, 
// but this is only a test platform for localhost use.
const databaseName = 'test_postgres_db'
const connection = {
  host: 'localhost',
  user: 'postgres',
  password: 'postgres'
}

// Creates the DB
async function createDatabase() {
  let knex = Knex({
    client: 'pg',
    connection
  })

  try {
    await knex.raw('DROP DATABASE ??', databaseName)
  } catch (e) {
    console.log(`DB ${databaseName} does not exist yet, creating...`)
  }
  await knex.raw('CREATE DATABASE ??', databaseName)


  // Establish knex connection
  knex = Knex({
    client: 'pg',
    connection: {
      ...connection,
      database: databaseName,
    }
  })

  // Run all available migrations
  await knex.migrate.latest()

  console.log(`Database ${databaseName} created and all migrations have run.`)
}

createDatabase().catch(console.log).then(process.exit)
