import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [{ text: "Hello! How can I assist you?", sender: "ai" }],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ text: action.payload, sender: "user" });
    },
    addAIMessage: (state, action) => {
      state.messages.push({ text: action.payload, sender: "ai" });
    },
  },
});

export const { addUserMessage, addAIMessage } = chatSlice.actions;
export default chatSlice.reducer;
