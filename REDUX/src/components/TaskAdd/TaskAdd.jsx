import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../redux/actions/taskAction";

function TaskAdd() {
  const [taskName, setTaskName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskName(value); // Update taskName directly
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("Submitting task name", taskName);
      dispatch(addToDo(taskName)); // Dispatch addToDo action with taskName
      setTaskName(""); // Clear input after submission
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="card flex justify-center items-center flex-col gap-y-8 m-10">
      <div className="header">
        <h1 className="font-semibold text-2xl bg-red-200 p-4 border-2 rounded-3xl shadow-lg">
          ToDo App
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form w-[90%] md:w-[405px]">
          <input
            type="text"
            name="taskName"
            id="taskName"
            placeholder="Add task here ...."
            className="border-2 w-full h-12 rounded-xl p-3 outline-none shadow-md"
            onChange={handleChange}
            value={taskName} // Bind input value to taskName
          />
        </div>
        <button
          type="submit"
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskAdd;
