import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ postsPerPage, currentPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  const pageMax = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= pageMax; i++) {
    if (i === pageMax && pageMax > 1) {
      pageNumbers.push(0);
    }
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-wrapper">
        {currentPage !== 1 ? (
          <span className="page-prev" onClick={() => paginate("prev")}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 31 10"
            >
              <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 "></polygon>
            </svg>
          </span>
        ) : (
          ""
        )}

        {pageNumbers.map((item, index) => (
          <span
            key={index}
            className={`page-node ${
              item !== 0
                ? currentPage === item
                  ? "active"
                  : ""
                : "none-active"
            }`}
            onClick={() => paginate(item)}
          >
            {item !== 0 ? item : "..."}
          </span>
        ))}

        {currentPage !== pageMax ? (
          <span className="page-next" onClick={() => paginate("next")}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 31 10"
            >
              <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 "></polygon>
            </svg>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
