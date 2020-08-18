import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import { getAllToDos, AddToDO } from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
    todo: {
      name: "",
      status: "",
    },
  };
  componentDidMount = () => {
    this.props.getAllTodos();
  };
  AddTodo = async (event) => {
    event.preventDefault();
    const todo = { ...this.state.todo };
    await this.props.AddToDO(todo);
    todo.name = "";
    this.setState({ todo });
  };
  addInputHandler = (event) => {
    const { value, name } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    this.setState({ todo });
  };
  render() {
    return (
      <React.Fragment>
        <AddTodoList
          addToDO={this.AddTodo}
          toDoValue={this.state.todo.name}
          inputHandler={this.addInputHandler}
        />
        <List toDoList={this.props.todos} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: () => dispatch(getAllToDos()),
    AddToDO: (todo) => dispatch(AddToDO(todo)),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
