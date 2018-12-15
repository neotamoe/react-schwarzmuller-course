import React from 'react';
import Link from 'next/link';

const errorPage = () => {
    return(
        <div>
            <h1>Oops, something went wrong here!</h1>
            <p>Try going back to <Link href="/"><a>the main page</a></Link>.</p>
        </div>
    );
};

export default errorPage;