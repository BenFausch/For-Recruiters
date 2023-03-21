import Button from "@mui/material/Button";

function runCode() {
    for (let i = 1; i <= 100; i++) {
        let output = i;
        output = i % 3 === 0 ? "fizz" : output;
        output = i % 5 === 0 ? "buzz" : output;
        output = ((i % 3 === 0) && (i % 5 === 0)) ? "fizzbuzz" : output;
        console.log(output);
    }
}

function runCode2() {
    for (let i = 1; i <= 100; i++) {
        console.log((i % 3 === 0 ? 'fizz' : '') + (i % 5 === 0 ? 'buzz' : '') || i)
    }
}


/**
 * Exercise #2
 *
 * @returns {*}
 */
function Exercise2() {
    return (
        <div>
            <pre>
                {`

/**
  Write a short program that prints each number from 1 to 100 on a new line. 

  For each multiple of 3, print "Fizz" instead of the number. 

  For each multiple of 5, print "Buzz" instead of the number. 

  For numbers which are multiples of both 3 and 5, print "FizzBuzz" 
  instead of the number.
**/
    `}
            </pre>


            <h2>Solution #1</h2>
            <p>fizzbuzz can be accomplished using something really rudimentary like:</p>
            <pre>
                {`for (let i = 1; i <= 100; i++) {
        let output = i;
        output = i % 3 === 0 ? "fizz" : output;
        output = i % 5 === 0 ? "buzz" : output;
        output = ((i % 3 === 0) && (i % 5 === 0)) ? "fizzbuzz" : output;
        console.log(output);
    }
`}
            </pre>
            <p>This is a terrible implementation however, it's overly verbose and requires multiple cases to handle a simple ternary. It could just as easily be written longhand as a switch statement, or multiple if/else statements, neither of which are any less verbose.</p>
            <Button onClick={e => runCode()}>Click to see it in the console!</Button>


            <h2>Solution #2</h2>
            <p>
                I like this solution. Not only is it short, but it doesn't require a third check for 'fizzbuzz', and uses logical OR as the fallback instead of using multiple statements.</p>
            <pre>{`
for(let i=1; i<=100; i++){
    console.log((i%3===0?'fizz':'')+(i%5===0?'buzz':'')||i)
}
           `}</pre>

            <Button onClick={e => runCode2()}>Click to see it in the console!</Button>
        </div>
    );
}

export default Exercise2;