import React, {Component} from 'react';
import classes from './Person.css';
import withClass2 from '../../hoc/withClass2';
import Aux from '../../hoc/Aux';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();  // 16.3+ way to create ref
    }

    componentDidMount () {
        // this will focus on the first Person input
        if(this.props.position === 0) {
            this.inputElement.current.focus();  // 16.3+ way to access your ref
            // this.inputElement.focus();  // pre-16.3 way to access your ref
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render () {
        return (
            <Aux>
                <AuthContext.Consumer>
                    {/* use this way for passing via props */}
                    {/* {this.props.isAuthenticated ? <p>Hooray--I'm authenticated!</p> : null }   */}
                    {auth => auth ? <p>Hooray--I'm authenticated!</p> : null }
                </ AuthContext.Consumer>
                <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref = {this.inputElement}  // 16.3+ way to assign ref created in constructor to an element
                    // ref={(input) => {this.inputElement = input}}  // pre-16.3 way to designate your ref
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        )            
    }    
} 

// NOTE: propTypes doesn't work in functional components
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass2(Person, classes.Person);