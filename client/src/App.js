import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";

import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9
}
  from "./components";


/**
 * Main App render and routing
 * @date 3/16/2023 - 3:40:47 PM
 *
 * @export App
 * @returns {*}
 */
export default function App() {
  return (
    <Router>
      <div className="main">
        <h1>React/postgres Examples -- Ben Fausch</h1>
        <Button variant="contained">
          <Link to="/">Home</Link>
        </Button>

        <Button variant="contained">
          <Link to="/exercise-1">Exercise 1</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-2">Exercise 2</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-3">Exercise 3</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-4">Exercise 4</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-5">Exercise 5</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-6">Exercise 6</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-7">Exercise 7</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-8">Exercise 8</Link>
        </Button>
        <Button variant="contained">
          <Link to="/exercise-9">Exercise 9</Link>
        </Button>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/exercise-1">
            <Exercise1 />
          </Route>
          <Route path="/exercise-2">
            <Exercise2 />
          </Route>
          <Route path="/exercise-3">
            <Exercise3 />
          </Route>
          <Route path="/exercise-4">
            <Exercise4 />
          </Route>
          <Route path="/exercise-5">
            <Exercise5 />
          </Route>
          <Route path="/exercise-6">
            <Exercise6 />
          </Route>
          <Route path="/exercise-7">
            <Exercise7 />
          </Route>
          <Route path="/exercise-8">
            <Exercise8 />
          </Route>
          <Route path="/exercise-9">
            <Exercise9 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="main">
      <h2>Home</h2>
      <p>This is a repo for tech leads/recruiters/HR managers to take a look at.</p>
      <p>This is pulled from a coding test I completed, it showcases some of my React knowlege and my approaches to problem solving.</p>
      <p><strong>Tools/methods used in this project include:</strong></p>
      <ul>
        <li>React functional components and hooks: <code>useState</code>, <code>useEffect</code>, <code>useRef</code>, <code>useReducer</code></li>
        <li>Fetch/promises</li>
        <li>eslint</li>
        <li>Jest/React testing library</li>
        <li>Postgres 15</li>
        <li>Knex cli</li>
        <li>faker</li>
        <li>Apollo/GQL</li>
      </ul>
      <h2>How to run</h2>
      <ul>
        <li>Use <code>cd client && npm install && npm start</code> to run a localhost server at port :3000 to see frontend examples. This was built with <code>create-react-app</code> and <code>materialUI</code></li>
        <li>Use <code>cd api && npm install && npm setup && npm start</code> to run a localhost API server at port :3001 to see backend examples. You will need a Postgres 15 server running and will need to modify the values in <code>database-config.js</code> to run correctly.</li>
      </ul>

      <p>Please click one of the above links to see code tests.</p>
    </div>
  );
}
