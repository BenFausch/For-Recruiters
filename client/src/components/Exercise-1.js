
function runCode(data, dataToFind) {
    console.log('DATA IS: ', data);
    let found;
    data.forEach(d => {
        return (dataToFind === d.message || dataToFind === d.userId) ? found = d : null;
    })
    console.log("FOUND", found)
}

function runCode2(data, dataToFind) {
    console.log("FOUND", data.find(d => (d.message === dataToFind || d.userId === dataToFind)))
}

function runCode3(data, dataToFind) {
    console.log("FOUND", data.find(({ message }) => message === dataToFind))
}
const data = [
    { message: '12313', userId: 0 },
    { message: '34212', userId: 1 },
    { message: '34234', userId: 2 },
    { message: '54532', userId: 3 },
    { message: '31233', userId: 4 },
    { message: '12312', userId: 5 },
    { message: '12313', userId: 6 }
];
const dataToFind = '31233';


/**
 * Exercise #1
 *
 * @returns {*}
 */
function Exercise1() {
    return (
        <div>
            <pre>
                {`

/*
  Write a function that finds \`dataToFind\` in the array \`data\`.
  Explain the BigO time of the function.
*/

var data = [
  { message: '12313', userId: 0},
  { message: '34212', userId: 1},
  { message: '34234', userId: 2},
  { message: '54532', userId: 3},
  { message: '31233', userId: 4},
  { message: '12312', userId: 5},
  { message: '12313', userId: 6}
];
var dataToFind = '31233';`
                }
            </pre>


            <h2>Solution #1</h2>
            <p>This problem can be solved with the following code:</p>
            <pre>
                {`
data.forEach(d => {
    console.log("d", dataToFind === d.message)
    return (dataToFind === d.message || dataToFind === d.userId) ? found = d : null;
})`}
            </pre>
            <button onClick={e => runCode(data, dataToFind)}>Click to see it in the console!</button>

            <p>
                This is fairly verbose though, I would probably use `array.find` instead.
            </p>


            <h2>Solution #2</h2>
            <p>
                Since we already know the shape of the objects within the array, the Big O complexity is linear `O(n)` as the comparison runs each iteration until the data has been found.
            </p>
            <pre>
                {`data.find(d => (d.message === dataToFind || d.userId === dataToFind))`}
            </pre>
            <button onClick={e => runCode2(data, dataToFind)}>Click to see it in the console!</button>


            <h2>Solution #3</h2>
            <p>As previously mentioned, we know the shape of the objects in the array, as well as the data types. Because the nested objects only contain one value that is a string, and our search is for a string, we can destructure the args and run a simple truthy check which will be even faster:</p>
            <pre>
                {`data.find(({ message }) => message === dataToFind)`}
            </pre>
            <button onClick={e => runCode3(data, dataToFind)}>Click to see it in the console!</button>
        </div>

    )


}

export default Exercise1;