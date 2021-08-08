import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import * as Config from "./../../constants/Config";

const Breadcrumb = (props) => {
  const { breadcrumbRoot, breadcrumbChild } = props;

  return (
    <div className="breadcrumb-shop">
      <div className="container">
        <nav className="breadcrumb-list">
          <div className="breadcrumb-item">
            <Link to={`/${Config.HOME_PAGE}`}>Trang chủ</Link>
          </div>
          <div className="breadcrumb-item">
            <Link to={`/${Config.HOME_PAGE}/collections/all`}>
              {breadcrumbRoot}
            </Link>
          </div>
          <div className="breadcrumb-item active">
            <Link to="">{breadcrumbChild}</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

Breadcrumb.propsTypes = {
  breadcrumbRoot: PropTypes.string.isRequired,
  breadcrumbChild: PropTypes.string.isRequired,
};

export default Breadcrumb;
