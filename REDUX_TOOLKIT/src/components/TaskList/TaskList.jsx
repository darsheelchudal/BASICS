import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo } from "../../redux/features/toDo/toDoSlice";

function TaskList() {
  const tasks = useSelector((state) => state.toDo.tasks);
  console.log(tasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return <div className="text-center">No tasks yet.</div>;
  }

  const handleDelete = (id) => {
    try {
      dispatch(deleteToDo(id));
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="tasks flex justify-center items-center flex-col gap-y-7 p-4 rounded-xl"
        >
          <div className="w-[90%] md:w-[405px] rounded-lg p-4 border-2">
            <div className="heading font-semibold text-lg mb-4">
              Your Tasks :
            </div>

            <div className="result flex flex-wrap justify-between p-4 items-center rounded-lg mb-2">
              <div className="text flex-1 truncate">
                <ul>
                  <li>{task.text}</li>
                </ul>{" "}
              </div>
              <div className="btn flex-shrink-0">
                <button
                  className="bg-red-400 w-16 h-9 rounded-lg hover:bg-red-500"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskList;
