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

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: {
            salad: ingredients.salad,
            bacon: ingredients.bacon,
            cheese: ingredients.cheese,
            meat: ingredients.meat,
        },
        error: false
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    }
}

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS,
    }
};