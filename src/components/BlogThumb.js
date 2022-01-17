import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import detailBlogSlice from "../pages/detailBlogSlice";
BlogThumb.propTypes = {
  dataBlogThumb: PropTypes.object,
  getID: PropTypes.func,
};

BlogThumb.defaultProps = {
  dataBlogThumb: "",
  getID: null,
};

function BlogThumb(props) {
  const dispatch = useDispatch();
  const { dataBlogThumb } = props;
  const handleClickDetail = (id) => {
    dispatch(detailBlogSlice.actions.selectID(id));
  };
  return (
    <div>
      <h2>{dataBlogThumb.title}</h2>
      <p>Written by {dataBlogThumb.author}</p>

      <div>
        <Link to={`detail/${dataBlogThumb.id}`}>
          <button
            onClick={() => handleClickDetail(dataBlogThumb.id)}
            type="button"
            className="btn btn-primary rounded mr-5 mt-2"
          >
            More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogThumb;
