import React, { useState, useEffect } from 'react';

import axios from 'axios';

const todo = props => {
    // useState returns an array with two elements, 
    // [0]: current/latest state, [1]: a reference to a function to change state
    // NOTE: unlike setState that merges with existing state, the useState function does not do this for you 
    const [todoName, setTodoName] = useState('');

    const [todoList, setTodoList] = useState([]);

    // useEffect runs after every render cycle, avoid infinite loop by using second argument
    useEffect(()=> {
        axios.get('https://react-hooks-intro.firebaseio.com/todos.json').then(result => {
            console.log(result);
            const todoData = result.data;
            const todos = [];
            for(const key in todoData){
                todos.push({id: key, name: todoData[key].name})
            }
            setTodoList(todos);
        });
        return () => {
            console.log('here is where you can do effect cleanup');
        };
    // }, []);  // this mimics componentDidMount and will only run this once
    }, [todoName]);  // useEffect callback will run every time there is a change to the value passed in the second argument 

    const inputChangeHandler = (event) => {
        setTodoName(event.target.value)
    };

    const todoAddHandler = () => {
        // NOTE: we use concat which returns a new array
        axios.post('https://react-hooks-intro.firebaseio.com/todos.json', {name: todoName})
            .then(result => {
                console.log(result)
                const todoItem = {id: result.data.name, name: todoName}
                setTodoList(todoList.concat(todoItem));

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="To Do"
                onChange={inputChangeHandler}
                value={todoName} />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo=> (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </React.Fragment>
    ); 
};

export default todo;

// NOTE:  must be in a component function and can only be called at 
// root level (not nested, not within handler function, etc)