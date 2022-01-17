import { combineReducers } from "redux";

import homeBlogReducer from "../pages/homeBlogSlice";
import detailBlogReducer from "../pages/detailBlogSlice";

const rootReducer = combineReducers({
  homeBlog: homeBlogReducer,
  detailBlog: detailBlogReducer,
});
export default rootReducer;
