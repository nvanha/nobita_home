import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as Actions from "./../actions/index";

import Breadcrumb from "./../components/Breadcrumb/Breadcrumb";
import Helmet from "./../components/Helmet/Helmet";
import Grid from "./../components/Grid/Grid";
import ProductCard from "./../components/ProductCard/ProductCard";
import Pagination from "./../components/Pagination/Pagination";

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
    path: `/${Config.HOME_PAGE}/404`,
    svgIcon: true,
  },
  {
    display: "Giảm giá",
    path: `/${Config.HOME_PAGE}/404`,
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

  const dropdownSideBar = useRef(null);
  const sidebarToggle = () => dropdownSideBar.current.classList.toggle("show");

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("nameAsc");

  const onChangeFilter = (event) => {
    const target = event.target;
    const value = target.value;
    setFilter(value);
  };

  useEffect(() => {
    const { slug } = props.match.params;

    switch (slug) {
      case "all":
        dispatch(Actions.actGetAllProducts());
        break;
      default:
        dispatch(Actions.actGetProductsByCategory(slug));
        break;
    }

    setFilter("nameAsc");
    dispatch(Actions.actFilterProducts("nameAsc"));
  }, [props.match.params, dispatch]);

  useEffect(() => {
    if (filter !== "") {
      dispatch(Actions.actFilterProducts(filter));
    }
  }, [dispatch, filter]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    if (pageNumber === "prev") {
      setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
    } else if (pageNumber === "next") {
      const temp = Math.ceil(products.length / postsPerPage);
      setCurrentPage(currentPage === temp ? currentPage : currentPage + 1);
    } else {
      setCurrentPage(pageNumber);
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setCurrentPage(1);
    setPostsPerPage(12);
  }, [products]);

  return (
    <Helmet title={titleHelmet()}>
      {/* Breadcrumb-shop */}
      <Breadcrumb breadcrumbRoot={"Danh mục"} breadcrumbChild={titleHelmet()} />
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
                    <select
                      name="filter"
                      value={filter}
                      onChange={onChangeFilter}
                    >
                      <option value="nameAsc">Tên: A-Z</option>
                      <option value="nameDesc">Tên: Z-A</option>
                      <option value="priceAsc">Giá: Tăng dần</option>
                      <option value="priceDesc">Giá: Giảm dần</option>
                    </select>
                  </span>
                </div>
              </div>

              <div className="collection__content__list">
                <Grid col={4} mdCol={3} smCol={2} gap={20}>
                  {currentPosts.map((item, index) => (
                    <ProductCard
                      key={index}
                      images={item.images}
                      name={item.name}
                      price={item.price}
                      slug={item.slug}
                    />
                  ))}
                </Grid>

                <Pagination
                  postsPerPage={postsPerPage}
                  currentPage={currentPage}
                  totalPosts={products.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default CollectionsPage;
