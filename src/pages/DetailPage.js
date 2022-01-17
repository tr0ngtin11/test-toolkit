import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { homeBlogSelector, detailBlogSelector } from "../redux/selector";
function DetailPage(props) {
  const listBlog = useSelector(homeBlogSelector);
  const idSelected = useSelector(detailBlogSelector);

  const selectedE = listBlog.find((e) => e.id === idSelected);
  console.log(idSelected);
  console.log(selectedE);
  return (
    <>
      <h2>{selectedE.title}</h2>
      <p>{selectedE.author}</p>
      <button type="button" className="btn btn-primary rounded mr-5 mt-2">
        Delete
      </button>
      <button type="button" className="btn btn-primary rounded mr-5 mt-2">
        Edit
      </button>
      <p>{selectedE.desc}</p>
    </>
  );
}

export default DetailPage;
