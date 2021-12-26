import './App.css';
import DropdownElemenet from './components/DropdownElemenet';
import InputElement from './components/InputElement';
import { useState } from 'react';

function App() {

  const options = [
    "Yael",
    "Steve",
    "Lili",
    "Bob"
  ]

  const initialState = {
    selectedEl: ""
  }

  const [state, setState] = useState(initialState)

  const onDropdownChange = v => setState({...state, selectedEl: v})

  return (
    <div className="App">
      <span>Selected Element: {state.selectedEl}</span>
      <InputElement testid="inp"/>
      <DropdownElemenet choices={options} style={{margin: "auto"}} onChange={onDropdownChange} />
    </div>
  );
}

export default App;
