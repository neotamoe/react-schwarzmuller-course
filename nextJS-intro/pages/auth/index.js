import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = () => {
    return (
        <div>
            <h1>The Auth Index Page</h1>
            <User name={Violet} age={3}/>
            <button onClick={() => Router.push('/')}>Go to Main</button>
        </div>
    )
};

export default authIndexPage;