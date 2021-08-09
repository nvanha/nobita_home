import React from "react";
import PropTypes from "prop-types";

import * as Config from "./../../constants/Config";

import { Link } from "react-router-dom";

const PageNot = (props) => {
  return (
    <div>
      <div className="pageNot">
        <div className="content-pagenot">
          <h1>{props.title}</h1>
          <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
          <Link to={`/${Config.HOME_PAGE}`}>Trở về trang chủ</Link>
        </div>
      </div>
    </div>
  );
};

PageNot.propsTypes = {
  title: PropTypes.string.isRequired,
};

export default PageNot;
