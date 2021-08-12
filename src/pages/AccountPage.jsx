import React from "react";
// import PropTypes from "prop-types";

import Helmet from "./../components/Helmet/Helmet";
import Login from "./../components/Account/Login";
import Register from "./../components/Account/Register";

const AccountPage = (props) => {
  const { slug } = props.match.params;

  console.log(slug);

  return (
    <Helmet title="Tạo tài khoản">
      <div className="layout-account">
        <div className="container">
          <div className="layout-account-inner">
            <div className="heading-account">
              <div className="header-page">
                <h1>{slug === "register" ? "Tạo tài khoản" : "Đăng nhập"}</h1>
              </div>
            </div>

            <div className="content-account">
              {slug === "register" ? <Register /> : <Login />}
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

AccountPage.propTypes = {};

export default AccountPage;
