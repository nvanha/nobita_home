import React from "react";

import HeaderTopBar from "./HeaderTopBar";
import HeaderUpperMiddle from "./HeaderUpperMiddle";
import HeaderMenuDesktop from "./HeaderMenuDesktop";
import HeaderSearchMobile from "./HeaderSearchMobile";

import * as Config from "./../../constants/Config";

const mainNav = [
  {
    display: "Trang chủ",
    path: `/${Config.HOME_PAGE}`,
    svgIcon: false,
  },
  {
    display: "Áo",
    path: `/${Config.HOME_PAGE}/collections/ao`,
    svgIcon: true,
  },
  {
    display: "Quần",
    path: `/${Config.HOME_PAGE}/collections/quan`,
    svgIcon: true,
  },
  {
    display: "Phụ kiện",
    path: `/${Config.HOME_PAGE}/collections/phu-kien`,
    svgIcon: true,
  },
  {
    display: "Sportwear",
    path: `/${Config.HOME_PAGE}/collections/sportwear`,
    svgIcon: true,
  },
  {
    display: "Thông tin",
    path: `/${Config.HOME_PAGE}`,
    svgIcon: true,
  },
  {
    display: "Giảm giá",
    path: `/404`,
    svgIcon: false,
  },
];

const Header = () => {
  return (
    <header className="header" id="header">
      <HeaderTopBar />
      <HeaderUpperMiddle mainNav={mainNav} />
      <HeaderMenuDesktop mainNav={mainNav} />
      <HeaderSearchMobile />
    </header>
  );
};

export default Header;
