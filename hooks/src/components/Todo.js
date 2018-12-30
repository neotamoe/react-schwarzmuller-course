import React, { useState, useEffect, useReducer, useRef } from 'react';

import axios from 'axios';

const todo = props => {
    // useState returns an array with two elements, 
    // [0]: current/latest state, [1]: a reference to a function to change state
    // NOTE: unlike setState that merges with existing state, the useState function does not do this for you 
    // const [todoName, setTodoName] = useState('');
    // const [todoList, setTodoList] = useState([]);
    const todoInputRef = useRef();

    const todoListReducer = (state, action) => {
        switch(action.type) {
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE': 
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    // useEffect runs after every render cycle, avoid infinite loop by using second argument
    useEffect(()=> {
        axios.get('https://react-hooks-intro.firebaseio.com/todos.json').then(result => {
            console.log(result);
            const todoData = result.data;
            const todos = [];
            for(const key in todoData){
                todos.push({id: key, name: todoData[key].name})
            }
            // setTodoList(todos);
            dispatch({type: 'SET', payload: todos})
        });
        return () => {
            console.log('here is where you can do effect cleanup');
        };
    }, []);  // this mimics componentDidMount and will only run this once
    // }, [todoName]);  // useEffect callback will run every time there is a change to the value passed in the second argument 

    // const inputChangeHandler = (event) => {
    //     setTodoName(event.target.value)
    // };

    const todoAddHandler = () => {
        const todoName = todoInputRef .current.value;
        // NOTE: we use concat which returns a new array
        axios.post('https://react-hooks-intro.firebaseio.com/todos.json', {name: todoName})
            .then(result => {
                setTimeout(() => {
                    console.log(result)
                    const todoItem = {id: result.data.name, name: todoName}
                    dispatch({type: 'ADD', payload: todoItem})
                    // setTodoList(todoList.concat(todoItem));
    
                },3000)

            })
            .catch(error => {
                console.log(error);
            })
    }

    const todoRemoveHandler = todoId => {
        axios.delete(`https://react-hooks-intro.firebaseio.com/todos/${todoId}.json`).then().catch(error => console.log(error))
        .then(response => {
            dispatch({type: 'REMOVE', payload: todoId})            
        })
    }

    return (
        <React.Fragment>
            <input 
                type="text" 
                placeholder="To Do"
                // onChange={inputChangeHandler}
                // value={todoName}
                ref={todoInputRef}
                 />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo=> (
                    <li 
                        key={todo.id}
                        onClick={todoRemoveHandler.bind(this, todo.id)}>{todo.name}</li>
                ))}
            </ul>
        </React.Fragment>
    ); 
};

export default todo;

// NOTE:  must be in a component function and can only be called at 
// root level (not nested, not within handler function, etc)