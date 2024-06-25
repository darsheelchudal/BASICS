// src/redux/actions/taskAction.js
export const addToDo = (taskName) => ({
  type: "ADD_TASK",
  payload: {
    id: new Date().getTime(),
    text: taskName,
  },
});

export const deleteToDo = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
