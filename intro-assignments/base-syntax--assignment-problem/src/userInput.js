import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" value={props.username} onChange={props.onChange}/>
    );
}

export default userInput;