import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "detailBlog",
  initialState: {
    id: "",
  },

  reducers: {
    selectID: (state, action) => {
      state.id = action.payload;
    },
  },
});
