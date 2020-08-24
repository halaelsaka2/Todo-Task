import React from "react";
import Input from "../Input";

const AddTodolist = ({ addToDO, toDoValue, inputHandler }) => (
  <React.Fragment>
    <h1>
      <span className="title">Todo</span>List
    </h1>
    <div className="inputDiv">
      {/* <div className="addTodoContainer"> */}
        <Input
          name="name"
          className="input"
          type="text"
          value={toDoValue}
          onChange={inputHandler}
          placeholder="What Do You Want to Do..."
        />
        <button className="add" onClick={addToDO}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
  </React.Fragment>
);
export default AddTodolist;
