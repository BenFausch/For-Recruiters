import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function ParentContainer({ children }) {
    const theme = useContext(ThemeContext)
    return (
        <div className={'provider-container '} style={{ backgroundColor: theme.currentTheme }} >
            {children}
            <ThemePicker />
        </div>
    )
}

function ThemePicker() {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
    return (
        <div>
            <label htmlFor="colorpicker">Click me to change the background color!</label>
            <input type="color" id="colorpicker" value={currentTheme} onChange={e => setCurrentTheme(e.target.value)} />
        </div>
    )
}


/**
 * Exercise #7
 *
 * @returns {*}
 */
function Exercise7() {
    const [currentTheme, setCurrentTheme] = useState('#000000');

    return (
        <div>
            <pre>
                {`// Setup how to use context provider and consumer to update state in its child components.

import React, { createContext } from 'react';
const App = () => {
  return (
    <>
    </>
  )
}

// Step 2: Write out a pseudo component that would consume the context from the App component`}
            </pre>

            <h2>Solution</h2>
            <p>Below is a code block full of cat ipsum. There is a button that sets the theme of the code block.</p>
            <p>The code for this is fairly straightforward, I create a Provider with <code>createContext()</code> that holds all of the child elements. Within that is <code>ParentContainer</code> that houses a div with an inline style. The themepicker child takes advantage of <code>setCurrentTheme</code> to update the color code, which is then stored in the context which is then passed to the parent.</p>
            <p>Remembering the old days of only redux, I am a big fan of this pattern. Using a few specific methods, a developer can link an entire network of components to a master state without needing to maintain a bunch of helper functions and definitions.</p>


            <pre>
                {`
const ThemeContext = createContext(null);

function ParentContainer({ children }) {
    const theme = useContext(ThemeContext)
    return (
        <div className={'provider-container '} style={{ backgroundColor: theme.currentTheme }} >
            {children}
            <ThemePicker />
        </div>
    )
}

function ThemePicker() {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)
    return (
        <div>
            <label for="colorpicker">Click me to change the background color!</label>
            <input type="color" id="colorpicker" value={currentTheme} onChange={e => setCurrentTheme(e.target.value)} />
        </div>
    )
}
        `}
            </pre>

            <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
                <ParentContainer>
                    <pre>{'Leave fur on owners clothes you call this cat food. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock. All of a sudden cat goes crazy furball roll roll roll stuff and things meeeeouw. Hunt by meowing loudly at 5am next to human slave food dispenser bird bird bird bird bird bird human why take bird out i could have eaten that run as fast as i can into another room for no reason. Destroy the blinds friends are not food for intently sniff hand, but meowing non stop for food and spread kitty litter all over house burrow under covers fish i must find my red catnip fishy fish. Give me attention or face the wrath of my claws play time cat sit like bread. Purr for no reason reward the chosen human with a slow blink, yet Gate keepers of hell. Am in trouble, roll over, too cute for human to get mad walk on a keyboard or side-eyes your "jerk" other hand while being petted so claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? eat a plant, kill a hand.'}</pre>
                </ParentContainer>
            </ThemeContext.Provider>
        </div>

    );
}

export default Exercise7;