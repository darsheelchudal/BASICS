import toDoReducer from "../features/toDo/toDoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
