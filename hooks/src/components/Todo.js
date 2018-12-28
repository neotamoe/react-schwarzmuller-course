import React, { useState } from 'react';

const todo = props => {
    // useState returns an array with two elements, 
    // [0]: current/latest state, [1]: a reference to a function to change state
    const [todoName, setTodoName] = useState('');
    
    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
    };

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="To Do"
                onChange={inputChangeHandler}
                value={todoName} />
            <button type="button">Add</button>
            <ul />
        </React.Fragment>
    ); 
};

export default todo;