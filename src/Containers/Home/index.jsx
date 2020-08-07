import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import { getAllToDos,AddToDO} from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
    todo:{
      name:"",
      status:""
    },
    todos:[]
  };
  async componentDidMount() {
    await this.props.getAllTodos();
    let todos=this.props.todos
    this.setState({todos})
  }
  AddTodo=async (event) => {
    event.preventDefault();
    const todo= {...this.state.todo}
    this.props.AddToDO(todo)
    
  };
  addInputHandler = (event) => {
    const { value, name } = event.target;
    const todo = { ...this.state.todo, [name]: value };
    const todos = [ ...this.state.todos,todo];
    this.setState({ todo,todos });
    console.log(this.state.todo);
  };  

  render() {
    return (
      <React.Fragment>
        <AddTodoList addToDO={this.AddTodo}
        toDoValue={this.state.todo.name}
        inputHandler={this.addInputHandler}
        />
        <List toDoList={this.state.todos}
        inputHandler={this.updateInputHandler} />
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
