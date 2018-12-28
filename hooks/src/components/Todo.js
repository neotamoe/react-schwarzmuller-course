import React, { useState } from 'react';

const todo = props => {
    // useState returns an array with two elements, 
    // [0]: current/latest state, [1]: a reference to a function to change state
    const inputState = useState('');
    
    const inputChangeHandler = (event) => {
        inputState[1](event.target.value)
    };

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="To Do"
                onChange={inputChangeHandler}
                value={inputState[0]} />
            <button type="button">Add</button>
            <ul />
        </React.Fragment>
    ); 
};

export default todo;