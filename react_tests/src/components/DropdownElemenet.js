import React from 'react'
import { useState } from 'react'
import './style.css'
import downArrow from './arrow.png'


function DropdownElemenet(props) {
    const initialState = {
        isOpen: true, 
        value: false,
        choices: props.choices || [""] 
    }

    const [dropDownState, setDropDownState] = useState(initialState)

    const dropDownItem = (n) => (<div className="dropDownItem" onClick={() => changeHandler(n)}>{n}</div>) 

    const renderChoices = () => {
        let out = []
        if (dropDownState.isOpen) {
            dropDownState.choices.map(e => {
                return out.push(dropDownItem(e))
            })
        }
        return out
    }

    const changeHandler = (v) => {
        setDropDownState({...dropDownState, value: v, isOpen: false})
        props.onChange(v)
    }
    const openHandler = () => setDropDownState({...dropDownState, isOpen: !dropDownState.isOpen})

    return (
        <div id="box-wrapper">
            <div id="box" onClick={() => openHandler()}>
                <span>{(dropDownState.value) ? dropDownState.value : props.choices[0]}</span>
                <span><img src={downArrow} id="dArrow"/></span>
            </div>
            { renderChoices() }
        </div>
    )
}

export default DropdownElemenet
