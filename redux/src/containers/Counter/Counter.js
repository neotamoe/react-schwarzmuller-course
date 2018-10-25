import React, { Component } from 'react';
// Connect is a function that returns a higher order component
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementFiveCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onIncrementFiveCounter: () => dispatch({type: 'INCREMENT_FIVE'}),
        onDecrementFiveCounter: () => dispatch({type: 'DECREMENT_FIVE'}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);