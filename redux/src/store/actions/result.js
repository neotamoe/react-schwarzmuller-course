import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

// saveResult is called after the other function is done, 
// way to handle asynchronous code in store
export const storeResult = (result) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(result))
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id: id
    };
};