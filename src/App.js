import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p>This is really working!</p>
        <hr/>
        <Person name="Gaëtan" age="31"/>
        <hr/>
        <Person name="Patrick" age="30">My Hobbies: Racing</Person>
        <hr/>
        <Person name="Sandra" age="32"/>
        <hr/>
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
