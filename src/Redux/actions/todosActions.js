import * as actionTypes from "../actionTypes";
import * as Api from "../api";

export const getAllTodosRes = (todos) => {
    return {
        type: actionTypes.GET_ALL_TODOS,
        todos
    };
};
export const getAllToDos = () => {
    return async (dispatch) => {
        const todos = await Api.GetAllToDos();
        dispatch(getAllTodosRes(todos));
    };
};
export const AddToDO = (todo) => {
    return async (dispatch) => {
        const newTodo = await Api.AddToDO(todo);
        dispatch(AddToDoRes(newTodo));
    };
};

export const AddToDoRes = (todo) => {
    return {
        type: actionTypes.ADD_TODO,
        todo
    };
};
export const DeleteToDO = (id) => {
    return async (dispatch) => {
        const todo = await Api.deleteToDO(id)
        dispatch(DeleteToDoRes(todo));
    };
};

export const DeleteToDoRes = (todo) => {
    return {
        type: actionTypes.DELETE_TODO,
        todo
    };
};