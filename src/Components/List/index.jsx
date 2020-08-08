import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";

const List = ({
  toDoList,
  inputHandler,
  deleteHandler,
  // clicked,
  editHandel,
  saveHandler,
  cancleHandler,
  checkedHandler
}) => (
  <div className="container">
    {toDoList.length > 0 &&
      toDoList.map((toDoItem, index) => (
        <Item
          key={toDoItem.id}
          toDoValue={toDoItem.name}
          inputHandler={inputHandler}
          id={toDoItem.id}
          deleteHandler={deleteHandler}
          clicked={toDoItem.clicked}
          editHandel={editHandel}
          saveHandler={saveHandler}
          cancleHandler={cancleHandler}
          checked={toDoItem.isDone}
          checkedHandler={checkedHandler}
        />
      ))}
  </div>
);
List.defaultProps = {
  toDoList: [],
};
List.propTypes = {
  toDoList: PropTypes.array,
};
export default List;
