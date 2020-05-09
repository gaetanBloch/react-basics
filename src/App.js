import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gaëtan', age: 31},
      {name: 'Patrick', age: 30},
      {name: 'Sandra', age: 32}
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement(
    //   'div',
    //   {className: 'App'},
    //   React.createElement('h1', null, 'Hi, I\'m a React app!!!')
    // );
  }
}

export default App;
