import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass2 from '../components/hoc/withClass2';
import Aux from '../components/hoc/Aux';

export const AuthContext = React.createContext(false);

class App extends Component {

  state = {
    persons: [
      {id: "1a", name: "Eli", age: 10},
      {id: "2b", name: "Sam", age: 8},
      {id: "3c", name: "Violet", age: 3},
    ],
    otherState: "oatmeal",
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated={this.state.authenticated}  // not needed when using Context
          />
      );

    }

    return (
      <Aux>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </ AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass2(App, classes.App);
