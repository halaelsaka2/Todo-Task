import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";

const List = ({ toDoList,inputHandler }) => (
  <div className="container">
    {toDoList.length > 0 &&
      toDoList.map((toDoItem, index) =>{
        console.log(toDoItem.name)
        return(
         <Item key={toDoItem.id} toDoValue={toDoItem.name} inputHandler={inputHandler} id={toDoItem.id} />
        )
      })}
  </div>
);
List.defaultProps = {
  toDoList: [],
};
List.propTypes = {
  toDoList:PropTypes.array
};
export default List;
