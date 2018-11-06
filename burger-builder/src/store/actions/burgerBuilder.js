import * as actionTypes from './actionTypes';

export const addIngredient = (ingt) => {
    return {
        type: actionTypes.ADD_INGREDIENT, 
        ingredientName: ingt
    }
};

export const deleteIngredient = (ingt) => {
    return {
        type: actionTypes.DELETE_INGREDIENT, 
        ingredientName: ingt
    }
};