import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleTaskInputChange}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task <PlusOutlined />
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            {task}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
