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
        case actionTypes.ADD_TODO:
            let todos = [...state.todos]
            todos.push(action.todo);
            return {
                ...state, todos: todos
            };
        case actionTypes.DELETE_TODO:
            let toDos = [...state.todos];
            const newtodos = toDos.filter((todo) => todo.id !== action.todo.id);
            console.log(newtodos,"indeletereducer");
            return {
                ...state, todos: newtodos
            };
        default:
            return state;
    }
};