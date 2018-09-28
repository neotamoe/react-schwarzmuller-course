import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css'

class App extends Component {

  state = {
    persons: [
      {name: "Eli", age: 10},
      {name: "Sam", age: 8},
      {name: "Violet", age: 3},
    ],
    otherState: "oatmeal",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('was clicked!')
    this.setState({persons: [
      {name: newName, age: 11},
      {name: "Sam", age: 8},
      {name: "Violette", age: 3},
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: "Eli", age: 11},
      {name: event.target.value, age: 8},
      {name: "Violet", age: 3},
    ]})
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
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Neota!")}
            changed={this.nameChangedHandler}>
            My Hobbies: Soccer</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
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
