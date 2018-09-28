import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component {

  state = {
    persons: [
      {id: "1a", name: "Eli", age: 10},
      {id: "2b", name: "Sam", age: 8},
      {id: "3c", name: "Violet", age: 3},
    ],
    otherState: "oatmeal",
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Eli", age: 11},
      {name: event.target.value, age: 8},
      {name: "Violet", age: 3},
    ]})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];  // spread operator
    persons.splice(personIndex, 1);  
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}/>
          })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
