import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItems from "./TodoItems";

function App() {
  const [listItem, setListItem] = useState("");
  const [listArray, setListArray] = useState([]);
  const handleChange = (e) => {
    if (e.target.value === null) return;
    setListItem(e.target.value);
  };
  const handleAdd = () => {
    if (listItem === "") {
      alert("please enter a item");
      return;
    }
    setListArray((prevItems) => {
      return [...prevItems, listItem];
    });
    setListItem("");
  };
  const handleDelete = (id) => {
    setListArray((prevItems) => {
      return prevItems.filter((item, idx) => idx !== id);
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>Todo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add your items"
          onChange={handleChange}
          value={listItem}
        />
        <button onClick={handleAdd} className="btn">
          +
        </button>

        <ol>
          {listArray.map((item, idx) => {
            return (
              <TodoItems
                id={idx}
                item={item}
                key={idx}
                onSelect={handleDelete}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
