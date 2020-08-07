import axios from "axios";
const url = "http://localhost:3000/toDo/";

export async function GetAllToDos() {
    const {
        data
    } = await axios.get(url);
    return data;
}

export async function GetToDoById(id) {
    const {
        data
    } = await axios.get(`${url}${id}`);
    return data;
}
export async function AddToDO(todo) {
    const {
        data
    } = await axios.post(`${url}addToDO`, todo);
    return data;
}
export async function EditToDO(id, todo) {
    const {
        data
    } = await axios.patch(`${url}${id}`, todo);
    return data;
}
export async function deleteToDO(id) {
    const {
        data
    } = await axios.delete(`${url}${id}`);
    return data;
}