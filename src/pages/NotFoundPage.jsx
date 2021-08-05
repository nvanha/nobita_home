import React from "react";
import { Link } from "react-router-dom";

import Helmet from "./../components/Helmet/Helmet";

import * as Config from "./../constants/Config";

const NotFoundPage = () => {
  return (
    <Helmet title="Không tìm thấy trang">
      <div className="pageNot">
        <div className="content-pagenot">
          <h1>Không tìm thấy trang</h1>
          <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
          <Link to={`/${Config.HOME_PAGE}`}>Trở về trang chủ</Link>
        </div>
      </div>
    </Helmet>
  );
};

export default NotFoundPage;
