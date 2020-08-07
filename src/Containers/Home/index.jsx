import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import {
  getAllToDos,
  AddToDO,
  DeleteToDO,
} from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
    todo: {
      name: "",
      status: "",
    },
    todos: [],
  };
  componentDidMount=()=> {
    this.props.getAllTodos();
  }
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
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
