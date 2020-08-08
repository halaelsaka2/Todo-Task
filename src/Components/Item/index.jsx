import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "../Input";
import {
  DeleteToDO,
  EditToDO,
  EditStatus
} from "../../Redux/actions/todosActions";

class Item extends Component {
  state = {
    updatedName: "",
  };
  componentDidMount() {
    this.setState({ updatedName: this.props.toDoValue });
  }
  handleSave=(todo)=> {
    todo = {...this.props.todo,name:this.state.updatedName}
    this.props.editClicked(this.props.id)
    this.props.editTodo(this.props.id,todo);
  }
  handelChange = (event) => {
    this.setState({updatedName:event.target.value})
  };
  handelCancel=(id)=>{
    this.setState({ updatedName: this.props.toDoValue });
    this.props.editClicked(id)
  }
  editHandel = (id) => {
    this.props.editClicked(id)
  };

  deleteHandler = (event) => {
    const { id } = event.target;
    this.props.deleteToDo(id);
  };
  checkedHandler=(event)=>{
    const todo = this.props.todos.find((todo) => todo.id === event.target.id);
    todo.isDone=!todo.isDone
     this.props.editStatus(event.target.id, todo);
  }
  render() {
    const {
      toDoValue,
      id,
      clicked,
      checked,
    } = this.props;
    return (
      <div className="item">
        <Input
          type="checkbox"
          className="checkbox_input"
          onChange={this.checkedHandler}
          checked={checked}
          id={id}
        />
        {clicked ? (
          <React.Fragment>
            <Input
              name="todo"
              className="item_input"
              type="text"
              value={this.state.updatedName}
              onChange={this.handelChange}
              id={id}
            />
            <button className="edit" id={id} onClick={()=>this.handleSave(this.props.todo)}>
              Save
            </button>
            <button className="remove" onClick={() => this.handelCancel(id)}>
              Cancel
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="item_input" type="text" id={id}>
              {toDoValue}
            </span>
            <i
              className="far fa-edit edit"
              style={{ color: "green", fontSize: "2rem" }}
              onClick={() => this.editHandel(id)}
              id={id}
            ></i>
            <i
              className="far fa-trash-alt remove"
              style={{ color: "red", fontSize: "2rem" }}
              onClick={this.deleteHandler}
              id={id}
            ></i>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Item.propTypes = {
  toDoValue: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
const mapDispatchToProps = (dispatch) => {
  return {
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
export default  connect(mapStateToProps, mapDispatchToProps)(Item);
