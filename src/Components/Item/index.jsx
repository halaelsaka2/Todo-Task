import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "../Input";

class Item extends Component {
  state = {
    updatedName: "",
  };
  componentDidMount() {
    this.setState({ updatedName: this.props.toDoValue });
  }
  handleSave=()=> {
    const newTodo = {...this.props.todo,name:this.state.updatedName}
    console.log(this.props.id,newTodo);
    this.props.saveHandler(this.props.id,newTodo)
  }
  handelChange = (event) => {
    this.setState({updatedName:event.target.value})
  };
  handelCancel=()=>{
    this.setState({ updatedName: this.props.toDoValue });
    this.props.cancleHandler()
  }
  render() {
    const {
      toDoValue,
      inputHandler,
      deleteHandler,
      id,
      clicked,
      editHandel,
      saveHandler,
      cancleHandler,
      checkedHandler,
      checked,
    } = this.props;
    return (
      <div className="item">
        <Input
          type="checkbox"
          className="checkbox_input"
          onChange={checkedHandler}
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
            <button className="edit" id={id} onClick={this.handleSave}>
              Save
            </button>
            <button className="remove" onClick={() => cancleHandler(id)}>
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
              onClick={() => editHandel(id)}
              id={id}
            ></i>
            <i
              className="far fa-trash-alt remove"
              style={{ color: "red", fontSize: "2rem" }}
              onClick={deleteHandler}
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

export default Item;
