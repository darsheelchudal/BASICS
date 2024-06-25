// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // Optionally add middleware and other store enhancers here
});

export default store;
