import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import {
  getAllToDos,
  AddToDO,
  DeleteToDO,
  EditToDO,
} from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
    todo: {
      name: "",
      status: "",
    },
    todos: [],
    clicked: false,
  };
  componentDidMount = () => {
    this.props.getAllTodos();
  };
  AddTodo = (event) => {
    event.preventDefault();
    const todo = { ...this.state.todo };
    this.props.AddToDO(todo);
  };
  addInputHandler = (event) => {
    const { value, name } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });
  };
  deleteHandler = (event) => {
    const { id } = event.target;
    this.props.deleteToDo(id);
  };
  updateInputHandler = (event) => {
    const { value, id } = event.target;
    const todos = this.props.todos;
    const todo = todos.find((todo) => todo.id === id);
    todo.name = value;
    this.setState({ todos });
  };
  saveHandler = async (event) => {
    const todo = this.props.todos.find(todo=>todo.id===event.target.id)
    await this.props.editTodo(event.target.id,todo);
    this.editHandel();
  };
  editHandel = () => {
    let clicked = this.state.clicked;
    clicked=!clicked;
    this.setState({clicked})
  };
  cancleHandler=()=>{
    this.editHandel()
  }
  render() {
    return (
      <React.Fragment>
        <AddTodoList
          addToDO={this.AddTodo}
          toDoValue={this.state.todo.name}
          inputHandler={this.addInputHandler}
        />
        <List
          toDoList={this.props.todos}
          inputHandler={this.updateInputHandler}
          deleteHandler={this.deleteHandler}
          editHandel={this.editHandel}
          clicked={this.state.clicked}
          saveHandler={this.saveHandler}
          cancleHandler={this.cancleHandler}
        />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: () => dispatch(getAllToDos()),
    AddToDO: (todo) => dispatch(AddToDO(todo)),
    deleteToDo: (id) => dispatch(DeleteToDO(id)),
    editTodo: (id,todo) => dispatch(EditToDO(id,todo)),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
