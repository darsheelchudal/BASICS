import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },

    deleteToDo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
