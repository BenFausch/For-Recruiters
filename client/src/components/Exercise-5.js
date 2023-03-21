import Button from "@mui/material/Button";

async function runCode(e) {
    e.preventDefault();
    console.log('Original result with var:')
    await original().then(() => {
        console.log('New result with let:')
        newversion()
    })
}

async function original() {
    return new Promise((resolve, reject) => {

        for (var i = 0; i < 3; i++) {
            // eslint-disable-next-line
            setTimeout(function () { console.log(i); }, 1000 * i);
            //this code is wrong, so we need to disable lint warnings to run it :)
        }

        //delay the next function for clarity
        setTimeout(() => {
            resolve(true);
        }, 3100);
    })
}

function newversion() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () { console.log(i); }, 1000 * i);
    }
}



/**
 * Exercise #5
 *
 * @returns {*}
 */
function Exercise5() {
    return (
        <div>
            <pre>
                {`// Explain why this function always logs 3.
// Modify this function to output the current value of i.

for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000 * i);
}
        `}</pre>

            <h2>Solution</h2>
            <p>This is a race condition issue as well as a closure issue. <code>setTimeout</code> registers 3 function calls and modifies <code>i</code> almost instantly. By using <code>var</code>, <code>i</code>'s lexical scope has only been defined in one portion of memory and the output will always return 3 when the callbacks are triggered.</p>
            <p>The solution is to simply change the scope to <code>let</code> so there are 3 separate instances of <code>i</code>:</p>
            <pre>
                {`
for (let i = 0; i < 3; i++) {
   setTimeout(function() { console.log(i); }, 1000 * i);
}      
        `}
        </pre>
            <Button onClick={(e) => runCode(e)}>Click to try it in the console!</Button>
        </div>
    );
}

export default Exercise5;