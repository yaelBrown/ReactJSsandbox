import React from 'react'
import './style.css'


export default function InputElement(props) {
    return (
        <input id="ctt-input" type="text" data-testid={props.testid} />
    )
}
