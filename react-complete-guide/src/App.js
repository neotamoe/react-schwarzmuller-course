import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import Radium, {StyleRoot} from 'radium';

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();  // same as using spread operator
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];

    if (this.state.persons.length <= 2 ) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1 ) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React app!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
