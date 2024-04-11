import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Go for Run",
    "French prac",
    "Code",
    "Check discord",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() != "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <h2>To-Do List</h2>

        <div>
          <input
            type="text"
            onChange={handleInput}
            placeholder="Enter a task"
            value={newTask}
          />
          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>

        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              <p>{t}</p>
              <button className="remove-button" onClick={() => removeTask(i)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
