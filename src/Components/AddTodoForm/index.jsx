import React from "react";

const AddTodolist = () => (
  <React.Fragment>
    <h1>
      <span className="title">Todo</span>List
    </h1>
    <div className="inputDiv">
      <input
        type="text"
        className="input"
        placeholder="What Do You Want to Do..."
      />
      <button className="add">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  </React.Fragment>
);

export default AddTodolist;
