import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

const Item = ({toDoValue,inputHandler,deleteHandler,id}) => (
  <div className="item">
    <Input
     name="name"
     className="item_input"
     type="text"
     value={toDoValue}
     onChange={inputHandler}
     id={id}
    />
    <i
      className="far fa-edit edit"
      style={{ color: "green", fontSize: "2rem" }}
      // onClick={editHandel}
    ></i>
    <i
      className="far fa-trash-alt remove"
      style={{ color: "red", fontSize: "2rem" }}
      onClick={deleteHandler}
      id={id}
    ></i>
  </div>
);
Item.propTypes = {
  toDoValue:PropTypes.string,
  onChange:PropTypes.func,
  id:PropTypes.string,
};
export default Item;
