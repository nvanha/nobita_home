import React from "react";
import { Link } from "react-router-dom";

import logo_bct from "./../../assets/images/logo/logo_bct.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="col-footer">
              <div className="footer-col-wrap">
                <h4 className="footer-title">Giới thiệu</h4>
                <div className="footer-content">
                  <p className="footer-description">
                    Trang mua sắm trực tuyến với những sản phẩm quần áo và phụ
                    kiện thời trang nam.
                  </p>
                  <div className="logo-footer">
                    <Link to="/">
                      <img src={logo_bct} alt="Logo bộ công thường" />
                    </Link>
                  </div>
                  <ul className="footerNav-social">
                    <li>
                      <Link to="/">
                        <i className="bx bxl-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bx bxl-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-footer">
              <div className="footer-col-wrap">
                <h4 className="footer-title">Thông tin liên hệ</h4>
                <div className="footer-content">
                  <ul className="footerNav-contact">
                    <li className="contact-1">
                      <i className="bx bxs-map"></i>
                      10/12D. Nguyễn Trãi, P. Cái Khế, Q. Ninh Kiều, TP. Cần
                      Thơ.
                    </li>
                    <li className="contact-2">
                      <i className="bx bxs-phone"></i>0917.637.376
                    </li>
                    <li className="contact-3">
                      <i className="fa fa-fax"></i>0817.637.376
                    </li>
                    <li className="contact-4">
                      <i className="fa fa-envelope"></i>
                      nobitahome1991@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-footer">
              <div className="footer-col-wrap">
                <h4 className="footer-title">Liên kết</h4>
              </div>
            </div>

            <div className="col-footer">
              <div className="footer-col-wrap">
                <h4 className="footer-title">Hỗ trợ</h4>
                <div className="footer-content">
                  <ul className="footerNav-support">
                    <li className="item">
                      <Link to="/">Tìm kiếm</Link>
                    </li>
                    <li className="item">
                      <Link to="/">Giới thiệu</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container-footer">
          <p className="footer-copyright">
            Copyright © 2021 <Link to="/">Nobita Home</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
