
/**
 * Exercise #4
 *
 * @returns {*}
 */
function Exercise4() {
    return (
        <div>
            <pre>
                {`/*
        a postgres database has been prepared with these tables:
        
        
        employees                             projects
        +---------------+---------+           +---------------+---------+
        | id            | int     |<----+  +->| id            | int     |
        | first-name    | varchar |     |  |  | title         | varchar |
        | last-name     | varchar |     |  |  | start-date    | date    |
        | salary        | int     |     |  |  | end-date      | date    |
        | department-id | int     |--+  |  |  | budget        | int     |
        +---------------+---------+  |  |  |  +---------------+---------+
                                     |  |  |
        departments                  |  |  |  employees-projects
        +---------------+---------+  |  |  |  +---------------+---------+
        | id            | int     |<-+  |  +--| project-id    | int     |
        | name          | varchar |     +-----| employee-id   | int     |
        +---------------+---------+           +---------------+---------+
        */
        
        1. write a query returning the employee's name, salary and department-name
        
        2. write a query that lists the name of each employee and the title of the their project
        
        3. write a query that lists all departments and the number of employees in each one`}
            </pre>

            <h2>Solutions</h2>
            <p>In the <code>api</code> folder in this project, I have prepared a basic node express server that leverages <code>knex</code> to manage a postgres database. In this folder there are various setup and database management scripts available. The meat of the code is in the migrations and seeds:</p>
            <pre>{`/*from the create_employees migration*/

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

/*from the seed file*/
             
  //Create Employee Listings
  const fakeEmployees = [];
  for (let i = 0; i <= amount; i++) {
    fakeEmployees.push(createFakeEmployee(i))
  }

  await knex('employees').del()
  await knex('employees').insert(fakeEmployees);
            `}
            </pre>


            <h3>Question #1</h3>
            <p>Once the schema has been built with correct references, this is a straightforward <code>join</code>.</p>

            <pre>
                {`app.get('/employees/details', async (req, res) => {
    const result = await knex
        .select('first_name','last_name','salary','department_id')
        .from('employees')
        .join('departments', 'employees.department_id', 'departments.id')
        .select('employees.id', 'departments.name AS department_name')
        .orderBy('employees.id')
    res.json({
        employee_details: result
    });
});`}
            </pre>

            <h3>Question #2</h3>
            <p>This is a slightly more complex <code>join</code> between 3 tables. The idea is the same however, where a join is created between two tables, clearing the result then selecting relevant data. I also created an alias for better readability.</p>
            <pre>
                {`app.get('/employees/projects', async (req, res) => {
    const result = await knex
        .select('employees.id','first_name')
        .from('employees')
        .join('employees_projects', 'employees.id', 'employees_projects.employee_id')
        .select('employees.id', 'employees_projects.employee_id','employees_projects.project_id')
        .join('projects','employees_projects.project_id','projects.id')
        .clear('select')
        .select('employees.first_name', 'employees.last_name','projects.title')
    res.json({
        employee_projects: result
    });
});`}
            </pre>


            <h3>Question #3</h3>
            <p>This solution requires the employment of <code>joins</code> as well as <code>count</code> and <code>groupBy</code> to collect the necessary data.</p>
            <pre>
                {`app.get('/employees/departments', async (req, res) => {
    const result = await knex
        .select('department_id')
        .from('employees')
        .join('departments', 'employees.department_id', 'departments.id')
        .groupBy('employees.department_id','departments.name')
        .select('departments.name')
        .count('departments.name')
        .orderBy('employees.department_id');        
        
    res.json({
        employee_departments: result
    });
});`}
            </pre>
        </div>
    )
}

export default Exercise4;