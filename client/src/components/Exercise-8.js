import { useState, useEffect } from "react";
import { useFetch } from '../hooks/hooks';


/**
 * Exercise #8
 *
 * @returns {*}
 */
function Exercise8() {
    const [currentTimeStamp, setCurrentTimeStamp] = useState();
    const [loader, setLoader] = useState();
    const url = "http://worldtimeapi.org/api/timezone/America/Denver"
    const { status, data } = useFetch(url);

    useEffect(() => {
        if (data?.datetime) {
            setTimeout(function () {
                const timestamp = new Date(data.datetime);
                setCurrentTimeStamp(timestamp.toISOString().replace("T", " ").substring(10, 19))
                setLoader('');
            }, 2000)
        } else if (status === 'error') {
            setCurrentTimeStamp('ERROR!')
            setLoader(<b>=== error, contact your webmaster! ===</b>)
        } else {
            setCurrentTimeStamp('loading...')
            setLoader(<div className="loader"></div>)
        }
    }, [data, status])

    return (
        <div>
            <pre>
                {`
        // Using test driven development, write a component that displays 
        // the time from a timestamp service in a H1 tag.
        // The component should handle an error state if the service returns a error
        // The component should display the service time in HH:MM:SS
        // The component should render a loading state while waiting for data from the service
        
        
        /**
         * GET: Returns the server time
         */
        const serviceUrl = 'http://worldtimeapi.org/api/timezone/America/Denver';
        `}
        </pre>

            <p>For this I'm going to use my trusty <code>useFetch</code> hook from Excercise 3. DRY :)</p>
            <p>This is the component:</p>

            <h1>Hola Muchacho! The local time is <b>{currentTimeStamp}</b></h1>
            {loader}

            <p>Since we are managing result status in the hook's reducer, I have everything I need to display a loader and the relevant data. Including <code>useEffect</code> allows me to manage the state of the front end render, and show a loading icon until the server responds with info. I have included a timeout to simulate a slow server in this case: </p>

            <pre>
                {`
const [currentTimeStamp, setCurrentTimeStamp] = useState();
const [loader, setLoader] = useState();
const url = "http://worldtimeapi.org/api/timezone/America/Denver"
const { status, data } = useFetch(url);

useEffect(() => {
    if (data?.datetime) {
        setTimeout(function () {
            const timestamp = new Date(data.datetime);
            setCurrentTimeStamp(timestamp.toISOString().replace("T", " ").substring(10, 19))
            setLoader('');
        }, 3000)
    } else if (status === 'error') {
        setCurrentTimeStamp('ERROR!')
        setLoader(<b>=== error, contact your webmaster! ===</b>)
    } else {
        setCurrentTimeStamp('loading...')
        setLoader(<div className="loader"></div>)
    }
}, [data, status])
            `}
            </pre>

            <p>Testing for a server response and render simulated to take a few seconds is always a little challenging, I employed testing-library's <code>waitFor</code> so I could check both versions of the render in <code>/tests/e-8.test.js</code>:</p>

            <pre>
                {`describe("E8 Component", () => {

    it('Renders an h1 tag with correct text, then loads time', async () => {
        
        expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
        
        expect(getByRole('heading', { level: 1 })).toHaveTextContent("Hola Muchacho! The local time is loading...");
        
        await waitFor(() => {
            expect(getByRole('heading', { level: 1 })).toHaveTextContent(/^Hola Muchacho! The local time is (?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$/)
        }, { timeout: 3500 })
    })
})`}
</pre>
        </div>
    )
}

export default Exercise8;