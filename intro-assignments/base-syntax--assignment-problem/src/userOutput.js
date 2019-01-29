import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hi, what is your name?</p>
            <p>Who me?  My name is {props.username}.</p>
        </div>
    )
}

export default userOutput;