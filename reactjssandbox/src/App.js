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

  switchNameHandler = () => {
    console.log('Was clicked');
  }

  render() {
    return (
      <div className="App">
        {/* <Person name="Yael" age="32"/>
        <Person name="Cookie" age="31"/>
        <Person name="Donut" age="30"/> */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}
