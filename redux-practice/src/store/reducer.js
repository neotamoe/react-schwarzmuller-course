const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.newPerson.name,
                age: action.newPerson.age
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson),  // concat creates a new array (push does not)
            }
        case 'DELETE_PERSON':
            // filter creates a new array
            const updatedArray = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedArray,
            }
    }

    return state;
};

export default reducer;
