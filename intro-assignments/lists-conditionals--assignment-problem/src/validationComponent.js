import React from 'react';

const validationComponent = (props) => {
    return <p>{props.inputLength < 5 ? 'Text too short' : 'Text long enough'}</p>
}

export default validationComponent;