import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "./../actions/index";

import Helmet from "./../components/Helmet/Helmet";
import Grid from "./../components/Grid/Grid";
import ProductCard from "./../components/ProductCard/ProductCard";

import * as Config from "./../constants/Config";

const sideBar = [
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

const CollectionsPage = (props) => {
  const titleHelmet = (slug = props.match.params.slug) => {
    switch (slug) {
      case "ao":
        return "Áo";
      case "quan":
        return "Quần";
      case "phu-kien":
        return "Phụ kiện";
      case "sportwear":
        return "Sportwear";
      case "all":
        return "Tất cả sản phẩm";
      default:
        return "";
    }
  };

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.actGetAllProducts());
  }, [dispatch]);

  const dropdownSideBar = useRef(null);
  const sidebarToggle = () => dropdownSideBar.current.classList.toggle("show");

  return (
    <Helmet title={titleHelmet()}>
      {/* Breadcrumb-shop */}
      <div className="breadcrumb-shop">
        <div className="container">
          <nav className="breadcrumb-list">
            <div className="breadcrumb-item">
              <Link to={`/${Config.HOME_PAGE}`}>Trang chủ</Link>
            </div>
            <div className="breadcrumb-item">
              <Link to={`/${Config.HOME_PAGE}/collections/all`}>Danh mục</Link>
            </div>
            <div className="breadcrumb-item active">
              <Link to="">Tất cả sản phẩm</Link>
            </div>
          </nav>
        </div>
      </div>
      {/* End Breadcrumb-shop */}

      <div className="main-content">
        <div className="container">
          <div className="collection-body">
            <div className="collection__sidebar">
              <h3
                className="collection__sidebar__title"
                onClick={sidebarToggle}
              >
                Danh mục sản phẩm<i className="fa fa-angle-down"></i>
              </h3>

              <div className="collection__sidebar__list" ref={dropdownSideBar}>
                {sideBar.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      item.svgIcon
                        ? "collection__sidebar__list__item"
                        : "collection__sidebar__list__item collection__sidebar__list__item-svgIcon"
                    }`}
                  >
                    <Link to={item.path} onClick={sidebarToggle}>
                      {item.display}
                      <i className="fa fa-minus"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="collection__content">
              <div className="collection__content__heading">
                <h2 className="collection__title">{titleHelmet()}</h2>

                <div className="collection__filter">
                  <span className="custom-dropdown">
                    <select name="" id="">
                      <option value="a">Tên: A-Z</option>
                      <option value="a">Tên: Z-A</option>
                      <option value="a">Giá: Tăng dần</option>
                      <option value="a">Giá: Giảm dần</option>
                    </select>
                  </span>
                </div>
              </div>

              <div className="collection__content__list">
                <Grid col={4} mdCol={3} smCol={2} gap={20}>
                  {products.map((item, index) => {
                    console.log(index, item);
                    return (
                      <ProductCard
                        key={index}
                        image01={item.image01}
                        image02={item.image02}
                        name={item.name}
                        price={item.price}
                        slug={item.slug}
                      />
                    );
                  })}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default CollectionsPage;
