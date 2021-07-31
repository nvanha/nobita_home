import React from "react";

const HeaderSearchMobile = () => {
  return (
    <div className="header-search-mobile">
      <div className="search-box">
        <form className="searchform">
          <div className="search-inner">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          </div>
          <button type="submit">
            <i className="bx bx-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderSearchMobile;
