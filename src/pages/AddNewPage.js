import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import homeSlice from "./homeBlogSlice";
import { useDispatch } from "react-redux";
function AddNewPage(props) {
  const { userName } = props;
  const [blog, setBlog] = useState({
    id: "",
    title: "",
    desc: "",
    author: "",
  });
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      homeSlice.actions.addNewBlog({
        id: uuidv4(),
        title: blog.title,
        desc: blog.desc,
        author: blog.author,
      })
    );
    setBlog({
      id: "",
      title: "",
      desc: "",
      author: "",
    });
  };

  return (
    <div>
      <div>
        <p className="name ml-2">Tên Blog</p>
        <input
          value={blog.title}
          className="p-2 my-2 w-50 tron"
          name="nameblog"
          placeholder="Tên Blog"
          onChange={(e) =>
            setBlog({
              ...blog,

              title: e.target.value,
              author: userName,
            })
          }
        />
      </div>

      <div>
        <p className="name ml-2 mt-3">Nội dung</p>
        <input
          value={blog.desc}
          className="p-2 my-2 w-50 tron"
          name="des"
          placeholder="Nội Dung"
          onChange={(e) => setBlog({ ...blog, desc: e.target.value })}
        />
      </div>
      <div>
        <button type="button" className="btn btn-primary rounded ml-3 mt-2">
          Cancel
        </button>
        <button
          onClick={handleAdd}
          type="button"
          className="btn btn-primary rounded ml-4 mt-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNewPage;
