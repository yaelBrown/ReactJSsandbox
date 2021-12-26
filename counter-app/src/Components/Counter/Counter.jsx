import React from 'react'
import { useState } from 'react'

function Counter() {
    const initialState = { count: 0 }
    const [state, setState] = useState(initialState)
    const countHandler = (dir) => {      
        if (dir === "increment") {
            setState({...state, count: state.count + 1})
        } else {
            setState({...state, count: state.count - 1})
        }
    }

    return (
        <div>
            <h3>Count: <span data-testid="cntVal">{state.count}</span></h3>
            <button onClick={() => countHandler("increment")}>Increment</button>
            <button onClick={() => countHandler("Decrement")}>Decrement</button>
        </div>
    )
}

export default Counter
