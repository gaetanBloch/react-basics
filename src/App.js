import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Gaëtan', age: 31},
      {name: 'Patrick', age: 30},
      {name: 'Sandra', age: 32}
    ],
    otherState: 'some other state'
  };

  changeNameHandler = (newName) => {
    this.setState({
        persons: [
          {name: newName, age: 31},
          {name: 'Patrick', age: 30},
          {name: 'Sandra', age: 32}
        ]
      }
    )
  };

  nameChangedHandler = event => {
    this.setState({
        persons: [
          {name: 'Gaëtan', age: 31},
          {name: event.target.value, age: 30},
          {name: 'Sandra', age: 32}
        ]
      }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app!!!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.changeNameHandler('Jérémy')}>
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>
          My Hobby: Volley-Ball
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.changeNameHandler.bind(this, 'Sebastien')}
          changed={this.nameChangedHandler}>
          My Hobby: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
          My Hobby: Dancing
        </Person>
      </div>
    );
  }
}

// const App = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       {name: 'Gaëtan', age: 31},
//       {name: 'Patrick', age: 30},
//       {name: 'Sandra', age: 32}
//     ]
//   });
//
//   const [otherState, setOtherState] = useState('some other value');
//
//   console.log({personsState, otherState});
//
//   const switchNameHandler = () => {
//     setPersonsState({
//         persons: [
//           {name: 'Jeremy', age: 31},
//           {name: 'Patrick', age: 31},
//           {name: 'Sandra', age: 31}
//         ]
//       }
//     )
//   };
//
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React app!!!</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
//         My Hobbies: Racing
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

export default App;
