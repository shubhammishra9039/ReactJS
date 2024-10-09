import React, { useState } from "react";
import { useRef } from "react";

function Todo() {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState({ show: false, id: null });

  let inputRef = useRef(null);

  const addInput = (e) => {
    
    setInput(e.target.value.trim())
  };

  const addItem = (e) => {
      console.log("hy");
      console.log(input);
     if(input)
     {
      setTask([...task,input])
      console.log(task);
     }

  };

  const deleteItem = () => {};
  const focusingItem = () => {};
  const updateItem = () => {};

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" onChange={addInput}  />
        <button onClick={addItem}>
          Add
        </button>
      </div>

      <div>
        {task.map((item, index) => {
          <ol key={index}>
            <li>{item}</li>
          </ol>;
        })}
      </div>
    </>
  );
}

export default Todo;
