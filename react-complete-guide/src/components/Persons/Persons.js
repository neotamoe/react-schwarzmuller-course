import React, {Component} from'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends Component {
    render () {
        return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)}
              key={person.id}
              name={person.name}
              age={person.age} 
              changed={(event) => this.props.changed(event, person.id)}/>
        })
    }
};

// NOTE: propTypes doesn't work in functional components
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default Persons;