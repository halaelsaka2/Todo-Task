import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodoList from "../../Components/AddTodoForm";
import List from "../../Components/List";
import { getAllToDos} from "../../Redux/actions/todosActions";

class Home extends Component {
  state = {
  };
  componentDidMount() {
    this.props.getAllTodos();
  }
  

  render() {
    return (
      <React.Fragment>
        <AddTodoList/>
        <List toDoList={this.props.todos} />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTodos: () => dispatch(getAllToDos()),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
