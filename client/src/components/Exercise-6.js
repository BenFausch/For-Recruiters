
/**
 * Exercise #6
 *
 * @returns {*}
 */
function Exercise6() {
    return (
        <div>
            <pre>
                {`// Why do all these log true? 
// How would you change this to print out false each time?


console.log(0 == false);
console.log(0 == '');`}
            </pre>

            <h2>Solution</h2>
            <p>The comparison isn't strong enough here. A double equals <code>==</code> uses type coercion to evaluate, which means <code>falsey</code> values such as 0, an empty string, or <code>false</code> are all evaluated the same. </p>
            <p>The solution is to evaluate with a <code>===</code>, so the value and the type are checked:</p>
            <pre>
                {`
console.log(0 === false);
console.log(0 === '');
        `}
            </pre>

            <p>A similar situation arises in React when objects in state are being compared. I have run into situations in the past where a state change in a deeply nested object does not update the render, this is due to the shallow comparison React employs. Usually a utility function is needed to check the exact shape of an object, but Typescript interfaces are helpful as well.</p>
        </div>
    );
}

export default Exercise6;