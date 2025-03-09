import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  views: {},
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    incrementView: (state, action) => {
      const blogId = action.payload;
      state.views[blogId] = (state.views[blogId] || 0) + 1;
    },
  },
});

export const { incrementView } = blogSlice.actions;
export default blogSlice.reducer;
