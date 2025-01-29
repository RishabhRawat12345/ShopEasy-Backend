import React, { useState } from 'react';

const Todo = () => {
  const [Task, setTask] = useState(''); // Current input task value
  const [AddTask, setAddTask] = useState([]); // Array of added tasks

  const handleclick = (e) => {
    setTask(e.target.value); // Updates task value as user types
  };

  const handleAdd = () => {
    if (Task.trim()) { // Check if Task is not empty
      setAddTask([...AddTask, Task]); // Add the new task to the list of tasks
      setTask(''); // Clear the input field
    }
  };

  const handleDelete = (index) => {
    // Delete a specific task by filtering out the task at the given index
    setAddTask(AddTask.filter((_, idx) => idx !== index));
  };

  const handleDeleteAll = () => {
    // Clear all tasks
    setAddTask([]);
  };

  return (
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl mb-4">To-Do List</h1>
      <input
        type="text"
        className="p-2 text-black bg-white rounded w-96"
        placeholder="Enter your task..."
        onChange={handleclick}
        value={Task} // Ensures input is controlled by Task state
      />
      <div className="twobuttons flex mt-5 justify-between gap-16">
        <button
          className="add border-2px border-white bg-green-400 rounded w-20"
          onClick={handleAdd}
        >
          Add
        </button>
        
      </div>

      {/* Display tasks */}
      <div className="task-list mt-6">
        {AddTask.length > 0 ? (
          AddTask.map((task, idx) => (
            <div
              key={idx}
              className="task border-2 border-green-600 bg-white text-black mt-2 w-96 p-2 rounded g-16"
            >
              {task}
              <button
                className="delete-task bg-red-500 text-white ml-4 p-1 rounded"
                onClick={() => handleDelete(idx)} // Delete specific task
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">No tasks added yet!</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
