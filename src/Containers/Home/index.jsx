import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import {
  getAllToDos,
  AddToDO,
  DeleteToDO,
  EditToDO,
  EditStatus
} from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
    todo: {
      name: "",
      status: "",
      clicked: false,
    },
  };
  componentDidMount = () => {
    this.props.getAllTodos();
  };
  AddTodo = async(event) => {
    event.preventDefault();
    const todo = { ...this.state.todo };
    await this.props.AddToDO(todo);
    todo.name=""
    this.setState({todo})
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
    const todo = this.props.todos.find((todo) => todo.id === id);
    todo.name = value;
    this.setState({ todo });
  };
  saveHandler = async (event) => {
    console.log(event.target.id);
    const todo = this.props.todos.find((todo) => todo.id === event.target.id);
    this.props.editClicked(todo.id)
    await this.props.editTodo( event.target.id,todo);
  };
  editHandel = (id) => {
    this.props.editClicked(id)
  };
  cancleHandler = (id) => {
    this.editHandel(id);
  };
  checkedHandler=(event)=>{
    const todo = this.props.todos.find((todo) => todo.id === event.target.id);
    todo.isDone=!todo.isDone
    console.log(todo);
     this.props.editStatus(event.target.id, todo);
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
          // clicked={this.state.clicked}
          saveHandler={this.saveHandler}
          cancleHandler={this.cancleHandler}
          checkedHandler={this.checkedHandler}
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
    editTodo: (id, todo) => dispatch(EditToDO(id, todo)),
    editStatus: (id, todo) => dispatch(EditStatus(id, todo)),
    editClicked:(id)=>dispatch({type:"todoclick", payload:id})
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
