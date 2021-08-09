import React from "react";

import Helmet from "./../components/Helmet/Helmet";
import PageNot from "./../components/PageNot/PageNot";

const NotFoundPage = () => {
  return (
    <Helmet title="Không tìm thấy trang">
      <PageNot title="Không tìm thấy trang" />
    </Helmet>
  );
};

export default NotFoundPage;
