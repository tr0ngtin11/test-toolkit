import { configureStore } from "@reduxjs/toolkit";
import homeBlogSlice from "../pages/homeBlogSlice";
import detailBlogSlice from "../pages/detailBlogSlice";
const store = configureStore({
  reducer: {
    homeBlog: homeBlogSlice.reducer,
    detailBlog: detailBlogSlice.reducer,
  },
});

export default store;
