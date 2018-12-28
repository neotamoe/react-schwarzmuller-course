import React, {useContext} from 'react';

import AuthContext from '../auth-context';

const auth = props => {

    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Auth</h2>
            <button onClick={auth.login}>Log In</button>
        </div>
    )    
};


export default auth;