// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    // Other reducers go here if needed
  },
});

export default store;
