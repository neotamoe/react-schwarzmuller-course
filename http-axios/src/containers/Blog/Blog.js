import React, { Component } from 'react';

import {Route, Link} from 'react-router-dom';

import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',  // this always creates an absolute path
                                // to create relative path and append new-post to end of page/link you're on:
                                // use to={props.match.url + '/new-post}
                                hash: '#submit',  // these last two aren't used, but are examples
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;