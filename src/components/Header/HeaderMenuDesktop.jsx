import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const HeaderMenuDesktop = (props) => {
  const { mainNav } = props;

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  return (
    <div className="header-menu-desktop">
      <div className="menu-desktop-inner">
        <nav className="navbar-mainmenu">
          {mainNav.map((item, index) => (
            <div
              key={index}
              className={`navbar-mainmenu--item ${
                activeNav !== 0 ? (activeNav === index ? "active" : "") : ""
              }`}
            >
              <Link to={item.path}>
                {item.display}{" "}
                <i
                  className={`${
                    item.svgIcon === true ? "bx bx-chevron-down" : "none-el"
                  }`}
                ></i>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

HeaderMenuDesktop.propsTypes = {
  mainNav: PropTypes.array.isRequired,
};

export default HeaderMenuDesktop;
