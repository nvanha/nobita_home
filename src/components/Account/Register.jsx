import React from "react";
// import PropTypes from 'prop-types'

import Button from "./../Button/Button";

import { Link } from "react-router-dom";

import * as Config from "./../../constants/Config";

const Register = (props) => {
  return (
    <div className="userbox">
      <form action="" className="form">
        <div className="form-control">
          <input required type="text" placeholder="Họ" name="userLastName" />
        </div>
        <div className="form-control">
          <input required type="text" placeholder="Tên" name="userFirstName" />
        </div>
        <div className="form-control gender">
          <input required type="radio" placeholder="Họ" name="userGender" />
          <label htmlFor="gender">Nữ</label>
          <input required type="radio" placeholder="Họ" name="userGender" />
          <label htmlFor="gender">Name</label>
        </div>
        <div className="form-control">
          <input
            required
            type="text"
            placeholder="mm/dd/yyyy"
            name="userBirthday"
          />
        </div>
        <div className="form-control">
          <input required type="email" placeholder="Email" name="userEmail" />
        </div>
        <div className="form-control password">
          <input
            required
            type="password"
            placeholder="Mật khẩu"
            name="userPassword"
          />
        </div>
        <div className="form-sitebox-recaptcha">
          This site is protected by reCAPTCHA and the Google{" "}
          <Link to={`/${Config.HOME_PAGE}`}>Privacy Policy</Link> and{" "}
          <Link to={`/${Config.HOME_PAGE}`}>Terms of Service</Link> apply.
        </div>
        <div className="form-submit">
          <Button>Đăng ký</Button>
        </div>
        <div className="form-req-pass">
          <Link to={`/${Config.HOME_PAGE}`} className="comeback">
            <i className="fa fa-long-arrow-left"></i>Quay lại trang chủ
          </Link>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {};

export default Register;
