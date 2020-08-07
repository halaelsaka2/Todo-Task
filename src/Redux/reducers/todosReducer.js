import * as actionTypes from "../actionTypes";

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_TODOS:
            return {
                ...state, todos: action.todos
            };
        default:
            return state;
    }
};