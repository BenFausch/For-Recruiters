/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { faker } = require('@faker-js/faker');


const createFakeEmployee = (id) => ({
  id: id + 1,
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  salary: faker.datatype.number(),
  department_id: faker.datatype.number({ max: 5 })
})

const createFakeProject = (id) => ({
  id: id + 1,
  title: faker.lorem.word(),
  start_date: faker.date.past(),
  end_date: faker.date.future(),
  budget: faker.datatype.number(),
})

exports.seed = async function (knex) {
  const amount = 25;

  //Create Employee Listings
  const fakeEmployees = [];
  for (let i = 0; i <= amount; i++) {
    fakeEmployees.push(createFakeEmployee(i))
  }

  await knex('employees').del()
  await knex('employees').insert(fakeEmployees);

  //Create Department Listings
  const departments = await knex.select('department_id').from('employees').groupBy('department_id')
  const fakeDepartments = [];
  departments.forEach((d) => {
    fakeDepartments.push({
      id: d.department_id,
      name: faker.helpers.arrayElement(['fighters', 'rangers', 'wizards','clerics', 'bards']) 
    })
  });
  await knex('departments').del()
  await knex('departments').insert(fakeDepartments);

  //Create Project Listings
  const fakeProjects = [];
  for (let i = 0; i <= amount; i++) {
    fakeProjects.push(createFakeProject(i))
  }
  await knex('projects').del()
  await knex('projects').insert(fakeProjects);

  //Create Employee Projects
  const employeeProjects = await knex.select('id').from('employees');
  const fakeEmployeeProjects = [];
  fakeProjects.forEach((p, i) => {
    fakeEmployeeProjects.push({
      project_id: p.id,
      employee_id: employeeProjects[i].id
    })
  })
  await knex('employees_projects').del()
  await knex('employees_projects').insert(fakeEmployeeProjects);

  console.log('Database now has employees and data for testing, run npm start to start the server.')
};
