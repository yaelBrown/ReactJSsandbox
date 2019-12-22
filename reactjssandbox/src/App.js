import React, { Component } from 'react';
import Person from './components/Person';

export default class App extends Component {
  state = {
    persons: [
      { name: 'Yael', age: 32 },
      { name: 'Cookie', age: 31 },
      { name: 'Donut', age: 30 }
    ]
  }

  render() {
    return (
      <div className="App">
        {/* <Person name="Yael" age="32"/>
        <Person name="Cookie" age="31"/>
        <Person name="Donut" age="30"/> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      </div>
    );
  }
}
