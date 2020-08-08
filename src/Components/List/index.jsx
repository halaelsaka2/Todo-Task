import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";

const List = ({
  toDoList,
}) => (
  <div className="container">
    {toDoList.length > 0 &&
      toDoList.map((toDoItem, index) => (
        <Item
          todo={toDoItem}
          key={toDoItem.id}
          toDoValue={toDoItem.name}
          id={toDoItem.id}
          clicked={toDoItem.clicked}
          checked={toDoItem.isDone}
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
