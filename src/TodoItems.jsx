import React from "react";

const TodoItems = (props) => {
  return (
    <div>
      <div className="todo_style">
        <button className="neg-btn" onClick={() => props.onSelect(props.id)}>
          x
        </button>
        <li>{props.item}</li>
      </div>
    </div>
  );
};

export default TodoItems;
