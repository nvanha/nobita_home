import React from "react";

import HeaderTopBar from "./HeaderTopBar";
import HeaderUpperMiddle from "./HeaderUpperMiddle";
import HeaderMenuDesktop from "./HeaderMenuDesktop";

const Header = () => {
  return (
    <header className="header" id="header">
      <HeaderTopBar />
      <HeaderUpperMiddle />
      <HeaderMenuDesktop />
    </header>
  );
};

export default Header;
