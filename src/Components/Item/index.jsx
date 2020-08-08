import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

const Item = ({
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
}) => {
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
            value={toDoValue}
            onChange={inputHandler}
            id={id}
          />
          <button className="edit" id={id} onClick={saveHandler}>
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
};

Item.propTypes = {
  toDoValue: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};
export default Item;
