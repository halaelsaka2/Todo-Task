import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";

const List = ({ toDoList,onChange }) => (
  <div className="container">
    {toDoList.length > 0 &&
      toDoList.map((toDoItem, index) => <Item key={index} toDoName={toDoItem.name} toDoValue={toDoItem.name} onChange={onChange} id={toDoItem.id} />)}
  </div>
);
List.defaultProps = {
  toDoList: [],
};
List.propTypes = {
  toDoList:PropTypes.array
};
export default List;
