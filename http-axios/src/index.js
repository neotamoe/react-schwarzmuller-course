import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTHTOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // could edit request config here
    // common use here would be as a way to add a common headers (such as for authorization)
    return request;  // without this line, your interceptor is blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // could edit response config here
    return response;  // without this line, your interceptor is blocking the request
}, error => {
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
