const express = require('express')
const app = express()
const port = 3001
const knex  = require('./db/database-config.js');


app.get('/', (req, res) => {
    res.status(200).send('Hello from the API!');
})

//Question 4.1
//Write a query returning the employee's name, salary and department name
app.get('/employees/details', async (req, res) => {
    const result = await knex
        .select('first_name','last_name','salary','department_id')
        .from('employees')
        .join('departments', 'employees.department_id', 'departments.id')
        .select('employees.id', 'departments.name AS department_name')
        .orderBy('employees.id')
    res.json({
        employee_details: result
    });
});

//Question 4.2
//Write a query that lists the name of each employee and the title of the their project
app.get('/employees/projects', async (req, res) => {
    const result = await knex
        .select('employees.id','first_name')
        .from('employees')
        .join('employees_projects', 'employees.id', 'employees_projects.employee_id') //grab employee_id from e_proj, use emp.id as ref
        .select('employees.id', 'employees_projects.employee_id','employees_projects.project_id') //select the id's
        .join('projects','employees_projects.project_id','projects.id') //grab proj_id from projects
        .clear('select')
        .select('employees.first_name', 'employees.last_name','projects.title')
    res.json({
        employee_projects: result
    });
});

//Question 4.3
// Write a query that lists all departments and the number of employees in each one
app.get('/employees/departments', async (req, res) => {
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
});

app.listen(port, () => {
    console.log(`API running on port ${port}.`)
})

