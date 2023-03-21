
import { render, screen, cleanup, waitFor } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import E8 from "../components/Exercise-8"

const { getByRole } = render(<E8 />)

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe("E8 Component", () => {

    it('Renders an h1 tag with correct text, then loads time', async () => {
        expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
        expect(getByRole('heading', { level: 1 })).toHaveTextContent("Hola Muchacho! The local time is loading...");
        await waitFor(() => {
            expect(getByRole('heading', { level: 1 })).toHaveTextContent(/^Hola Muchacho! The local time is (?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/)
        }, { timeout: 3500 }
        )
    })
})
