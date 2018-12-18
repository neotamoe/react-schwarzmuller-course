import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => {
    return (
        <div>
            <h1>The Auth Index Page - {props.appName}</h1>
            <User name="Violet" age="3"/>
            <button onClick={() => Router.push('/')}>Go to Main</button>
        </div>
    )
};

authIndexPage.getInitialProps = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App (Auth)'});
        },1000);
    });
    return promise;
};

export default authIndexPage;