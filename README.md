# Coding Examples for React/Postgres - Ben Fausch

This is a repo for tech leads/recruiters/HR managers to take a look at.

This is pulled from a coding test I completed, it showcases some of my React knowlege and my approaches to problem solving.

**Tools/methods used in this project include:**

- React functional components and hooks: `useState`, `useEffect`, `useRef`, `useReducer`
- Fetch/promises
- eslint
- Jest/React testing library
- Postgres 15
- Knex cli
- faker
- Apollo/GQL

## Requirements

- Node 14+
- npm
- Docker

## How to run

- Use `cd client && npm install && npm start` to run a localhost server at port :3000 to see frontend examples. This was built with `create-react-app` and `materialUI`
- To run the test for Question #8, run `npm run test` in `/client`
- To run the backend examples, use `cd api && npm install`
  - start the postgres docker container with `docker compose up -d`
  - run the database migrations and start the api with `npm run setupdb && npm start` to run a localhost API server at port :3001
  - routes are defined in `/api/index.js`

## Test questions

### Question 1

/*
  Write a function that finds `dataToFind` in the array `data`.
  Explain the BigO time of the function.
*/

```-
var data = [
  { message: '12313', userId: 0},
  { message: '34212', userId: 1},
  { message: '34234', userId: 2},
  { message: '54532', userId: 3},
  { message: '31233', userId: 4},
  { message: '12312', userId: 5},
  { message: '12313', userId: 6}
];
var dataToFind = '31233';
```

### Question 2


  Write a short program that prints each number from 1 to 100 on a new line. 

  For each multiple of 3, print "Fizz" instead of the number. 

  For each multiple of 5, print "Buzz" instead of the number. 

  For numbers which are multiples of both 3 and 5, print "FizzBuzz" 
  instead of the number.

### Question 3

// Using hooks, fetches data from fetchUrl
// When the component re-renders, it should not re-fetch the data.

```-
const fetchUrl = 'http://httpbin.org/anything';

const Component = (props) => {
  return (
    <div>
      {/* Render the fetched data */}
    </div>
  );
};
```

### Question 4

/*
A postgres database has been prepared with these tables:

```-
employees                             projects
+---------------+---------+           +---------------+---------+
| id            | int     |<----+  +->| id            | int     |
| first_name    | varchar |     |  |  | title         | varchar |
| last_name     | varchar |     |  |  | start_date    | date    |
| salary        | int     |     |  |  | end_date      | date    |
| department_id | int     |--+  |  |  | budget        | int     |
+---------------+---------+  |  |  |  +---------------+---------+
                             |  |  |
departments                  |  |  |  employees_projects
+---------------+---------+  |  |  |  +---------------+---------+
| id            | int     |<-+  |  +--| project_id    | int     |
| name          | varchar |     +-----| employee_id   | int     |
+---------------+---------+           +---------------+---------+
*/
```

1. Write a query returning the employee's name, salary and department_name

2. Write a query that lists the name of each employee and the title of the their project

3. Write a query that lists all departments and the number of employees in each one

### Question 5

// Explain why this function always logs 3.
// Modify this function to output the current value of i.

```for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 * i);
}
```

### Question 6

// Why do all these log true? 
// How would you change this to print out false each time?

```-
console.log(0 == false);

console.log(0 == '');

```

### Question 7

// Setup how to use context provider and consumer to update state in its child components.

```-
import React, { createContext } from 'react';
const App = () => {
  return (
    <>
    </>
  )
}
```

// Step 2: Write out a pseudo component that would consume the context from the App component

### Question 8

// Using test driven development, write a component that displays 
// the time from a timestamp service in a H1 tag.
// The component should handle an error state if the service returns a error
// The component should display the service time in HH:MM:SS
// The component should render a loading state while waiting for data from the service

```-
/**
 * GET: Returns the server time
 */
const serviceUrl = 'http://worldtimeapi.org/api/timezone/America/Denver';
```

### Question 9

// Assuming this codebase uses Apollo client, and `useBar` is a hook around a GraphQL query,
// write a unit test that check that Foo renders the error state when `useBar` throws an error

```-
import { useBar } from './queries.ts';
...

const Foo = () => {
  const [data, { error, loading } = useBar();

  return (
    <Page>
      ...
    </Page>
  );
}
```
