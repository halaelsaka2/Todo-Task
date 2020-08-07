import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

const Item = ({toDoName,toDoValue,onChange,id}) => (
  <div className="item">
    <Input
     name={toDoName}
     className="item_input"
     type="text"
     value={toDoValue}
     onChange={onChange}
     id={id}
    />
    <i
      className="far fa-edit edit"
      style={{ color: "green", fontSize: "2rem" }}
    ></i>
    <i
      className="far fa-trash-alt remove"
      style={{ color: "red", fontSize: "2rem" }}
    ></i>
  </div>
);
Item.propTypes = {
  toDoName:PropTypes.string,
  toDoValue:PropTypes.string,
  onChange:PropTypes.func,
  id:PropTypes.string,
};
export default Item;
