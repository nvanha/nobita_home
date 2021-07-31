import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeaderMenuDesktop = (props) => {
  const { mainNav } = props;

  return (
    <div className="header-menu-desktop">
      <div className="menu-desktop-inner">
        <nav className="navbar-mainmenu">
          {mainNav.map((item, index) => (
            <div key={index} className="navbar-mainmenu--item">
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
