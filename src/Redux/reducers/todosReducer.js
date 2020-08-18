import * as actionTypes from "../actionTypes";

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    let todos;
    let newTodos = []
    switch (action.type) {
        case actionTypes.GET_ALL_TODOS:
            todos = action.todos.map(todo => ({
                ...todo,
                clicked: false
            }))
            return {
                ...state, todos
            };
        case actionTypes.ADD_TODO:
            todos = [...state.todos]
            todos.push(action.todo);
            return {
                ...state, todos: todos
            };
        case actionTypes.DELETE_TODO:
            let toDos = [...state.todos];
            const newtodos = toDos.filter((todo) => todo.id !== action.todo.id);
            return {
                ...state, todos: newtodos
            };
        case actionTypes.EDIT_TODO:
            newTodos = state.todos.map(todo => todo.id === action.todo.id ? {
                ...action.todo,
                clicked: !todo.clicked
            } : todo);
            return {
                ...state, todos: newTodos
            };
        case actionTypes.EDIT_STATUS:
            newTodos = state.todos.map(todo => todo.id === action.todo.id ?
                action.todo :
                todo);
            return {
                ...state, todos: newTodos
            };
        case "todoclick":
            const id = action.payload;
            newTodos = state.todos.map(todo => todo.id === id ? {
                ...todo,
                clicked: !todo.clicked
            } : todo);

            return {
                ...state, todos: newTodos
            };
        default:
            return state;
    }
};