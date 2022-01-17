import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "homeBlog",
  initialState: [
    {
      id: "1",
      title: "title 1",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "2",
      title: "title 2",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "3",
      title: "title 3",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "4",
      title: "title 4",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "5",
      title: "title 5",
      desc: "desc 01",
      author: "duy tung",
    },
  ],

  reducers: {
    addNewBlog: (state, action) => {
      state.push(action.payload);
    }, // action creator
  },
});
