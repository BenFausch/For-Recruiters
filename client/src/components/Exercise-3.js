import Button from "@mui/material/Button";
import { useState } from "react";
import { useFetch } from '../hooks/hooks';


/**
 * Exercise #3
 *
 * @returns {*}
 */
function Exercise3() {
    const [query, setQuery] = useState("");

    //Short-circuit evaluation
    //The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.
    const url = query && `https://api.reddit.com/r/${query}`;

    const { status, data } = useFetch(url);
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(e.target?.search?.value ? e.target.search.value : '')
    }
    const posts = data.data;

    function formatData(posts) {
        if (posts?.children) {
            return (
                posts.children.map((child) => (
                    <div className="child" key={child.data.created}>
                        <a
                            target="_blank"
                            href={`https://www.reddit.com${child.data.permalink}`}
                            rel="noopener noreferrer"
                        >
                            {child.data.title}
                        </a>
                        <br />
                        <small>by {child.data.author}</small>
                    </div>
                ))
            )
        }

    }

    return (
        <div>
            <pre>
                {`
// Using hooks, fetches data from fetchUrl
// When the component re-renders, it should not re-fetch the data.

const fetchUrl = 'http://httpbin.org/anything';

const Component = (props) => {
  return (
    <div>
      {/* Render the fetched data */}
    </div>
  );
};

            `}
            </pre>

            <h2>Solution</h2>
            <p>This is a fairly simple implementation of useReducer alongside hooks, with promises to keep things clean. Input a subreddit, and it will return a simple list of the top posts of the day.</p>
            <p>In <code>Example-3.js</code>, I started with React's <code>useState</code> to watch the user's inputted query. From there, a simple logical OR handles the http trigger once a query has been submitted.</p>
            <p>In <code>hooks.js</code>, I have created a function <code>useFetch()</code> that employs React's <code>useReducer</code> to manage the state of the http request. I then used <code>useEffect()</code> to watch for updates in the called url. A security safeguard I employed was a simple cache array with <code>useRef()</code> to avoid duplicate form requests.</p>
            <p>I also included a manual <code>cleanup()</code> function to remove any previous effects from the last render.</p>


            <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                    <input type="text"
                        autoComplete="off"
                        name="search"
                        placeholder="Enter reddit sub ex. news"></input>
                </fieldset>
                <Button type="submit">Look for a subreddit</Button>
                <p><code>Note:</code> if you are running this via localhost, you will need to handle <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related">CORS headers</a>.</p>
            </form>

            {status === "fetched" ? formatData(posts) : ""}

        </div>
    )
}


export default Exercise3;