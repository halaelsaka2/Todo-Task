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
        console.log(todos,"inAction");
        dispatch(getAllTodosRes(todos));
    };
};

