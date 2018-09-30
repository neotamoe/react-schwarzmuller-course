import React, {Component} from 'react';
import classes from './Person.css';
import withClass2 from '../../hoc/withClass2';
import Aux from '../../hoc/Aux';

class Person extends Component {
    render () {
        return (
            <Aux>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )            
    }    
} 

export default withClass2(Person, classes.Person);