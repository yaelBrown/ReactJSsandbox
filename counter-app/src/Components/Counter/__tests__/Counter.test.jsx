import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../Counter';

const div = document.createElement('div')

beforeEach(() => {
    return render(<Counter/>, div)
})

afterEach(() => {
    cleanup(div)
})

it('renders without crashing', () => {
    expect(screen.getByText(/Count:/)).toBeInTheDocument()
})

describe('count works', () => {
    it('increments count', async () => {
        const incBtn = await screen.findByText("Increment")
        userEvent.click(incBtn)
        const cntVal = (await screen.findByTestId("cntVal")).textContent
        expect(cntVal).toBe("1")
    })

    it('decrement count', async () => {
        const decBtn = await screen.findByText("Decrement")
        userEvent.click(decBtn)
        const cntVal = (await screen.findByTestId("cntVal")).textContent
        expect(cntVal).toBe("-1")
    })

})