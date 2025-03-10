import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import chatReducer from './chatSlice'


const store = configureStore({
  reducer: {
    blogs: blogReducer,
    chat: chatReducer,
  }
});

export default store;
