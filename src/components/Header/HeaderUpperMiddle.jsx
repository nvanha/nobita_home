import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "./../Button/Button";

import logo from "./../../assets/images/logo/logo.png";

import * as Config from "./../../constants/Config";
import * as Actions from "./../../actions/index";

import { useDispatch, useSelector } from "react-redux";

const phone = [
  {
    key: "phone-01",
    value: "0917.637.376",
  },
  {
    key: "phone-02",
    value: "0817.637.376",
  },
];

const email = [
  {
    key: "email-01",
    value: "nobitahome1991@gmail.com",
  },
];

const HeaderUpperMiddle = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subTotal = () => {
    return cart.reduce(
      (total, item) => total + item.details.quantity * item.product.price,
      0
    );
  };

  const onDelete = (index) => {
    dispatch(Actions.actDeleteProductInCart(cart[index]));
  };

  const showCartList = () => {
    if (cart.length > 0) {
      return (
        <div className="cart-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item--img">
                <Link to={item.product.slug}>
                  <img src={item.product.images[0]} alt="img" />
                </Link>
              </div>
              <div className="cart-item--details">
                <p className="pro-title">
                  <Link to={item.product.slug}>{item.product.name}</Link>
                  <span>
                    {item.details.color} / {item.details.size}
                  </span>
                </p>
                <div className="mini-cart_quantity">
                  <div className="pro-quantity-view">
                    {item.details.quantity}
                  </div>
                  <div className="pro-price-view">
                    {new Intl.NumberFormat().format(
                      item.details.quantity * item.product.price
                    )}
                    ???
                  </div>
                </div>
              </div>
              <div className="remove-cart">
                <span onClick={() => onDelete(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1000 1000"
                    enableBackground="new 0 0 1000 1000"
                  >
                    {" "}
                    <g>
                      <path d="M500,442.7L79.3,22.6C63.4,6.7,37.7,6.7,21.9,22.5C6.1,38.3,6.1,64,22,79.9L442.6,500L22,920.1C6,936,6.1,961.6,21.9,977.5c15.8,15.8,41.6,15.8,57.4-0.1L500,557.3l420.7,420.1c16,15.9,41.6,15.9,57.4,0.1c15.8-15.8,15.8-41.5-0.1-57.4L557.4,500L978,79.9c16-15.9,15.9-41.5,0.1-57.4c-15.8-15.8-41.6-15.8-57.4,0.1L500,442.7L500,442.7z"></path>
                    </g>{" "}
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="item-cart_empty">
          <div className="svgico-mini-cart">
            <svg width="81" height="70" viewBox="0 0 81 70">
              <g
                transform="translate(0 2)"
                strokeWidth="4"
                stroke="#1e2d7d"
                fill="none"
                fillRule="evenodd"
              >
                <circle strokeLinecap="square" cx="34" cy="60" r="6"></circle>
                <circle strokeLinecap="square" cx="67" cy="60" r="6"></circle>
                <path d="M22.9360352 15h54.8070373l-4.3391876 30H30.3387146L19.6676025 0H.99560547"></path>
              </g>
            </svg>
          </div>
          <p>Hi???n ch??a c?? s???n ph???m</p>
        </div>
      );
    }
  };

  const { mainNav } = props;

  const dropdownSearchRef = useRef(null);
  const dropdownAccountRef = useRef(null);
  const dropdownCartRef = useRef(null);
  const dropdownMenuMobileRef = useRef(null);

  const dropdownToggle = (key) => {
    switch (key) {
      case "search": {
        dropdownSearchRef.current.classList.toggle("show-action");
        if (dropdownAccountRef.current.classList[2] !== undefined) {
          dropdownAccountRef.current.classList.toggle("show-action");
        } else if (dropdownCartRef.current.classList[2] !== undefined) {
          dropdownCartRef.current.classList.toggle("show-action");
        } else if (dropdownMenuMobileRef.current.classList[2] !== undefined) {
          dropdownMenuMobileRef.current.classList.toggle("show-action");
        }
        return;
      }
      case "account": {
        dropdownAccountRef.current.classList.toggle("show-action");
        if (dropdownSearchRef.current.classList[2] !== undefined) {
          dropdownSearchRef.current.classList.toggle("show-action");
        } else if (dropdownCartRef.current.classList[2] !== undefined) {
          dropdownCartRef.current.classList.toggle("show-action");
        } else if (dropdownMenuMobileRef.current.classList[2] !== undefined) {
          dropdownMenuMobileRef.current.classList.toggle("show-action");
        }
        return;
      }
      case "cart": {
        dropdownCartRef.current.classList.toggle("show-action");
        if (dropdownAccountRef.current.classList[2] !== undefined) {
          dropdownAccountRef.current.classList.toggle("show-action");
        } else if (dropdownSearchRef.current.classList[2] !== undefined) {
          dropdownSearchRef.current.classList.toggle("show-action");
        } else if (dropdownMenuMobileRef.current.classList[2] !== undefined) {
          dropdownMenuMobileRef.current.classList.toggle("show-action");
        }
        return;
      }
      case "menu-mobile": {
        dropdownMenuMobileRef.current.classList.toggle("show-action");
        if (dropdownSearchRef.current.classList[2] !== undefined) {
          dropdownSearchRef.current.classList.toggle("show-action");
        } else if (dropdownAccountRef.current.classList[2] !== undefined) {
          dropdownAccountRef.current.classList.toggle("show-action");
        } else if (dropdownCartRef.current.classList[2] !== undefined) {
          dropdownCartRef.current.classList.toggle("show-action");
        }
        return;
      }
      default:
        return;
    }
  };

  return (
    <div className="header-upper-middle">
      <div className="header-upper-middle-inner">
        <div className="row">
          <div className="col header-upper-navbar">
            <div className="visible-sm">
              <div className="wrap-icon">
                <div
                  className="header-action header-action__menu"
                  ref={dropdownMenuMobileRef}
                >
                  <div className="header-action_text">
                    <span onClick={() => dropdownToggle("menu-mobile")}>
                      <i className="bx bx-menu"></i>
                    </span>
                  </div>
                  <div className="header-action_dropdown">
                    <span className="box-triangle">
                      <svg viewBox="0 0 20 9" role="presentation">
                        <path
                          d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                          fill="#ffffff"
                        ></path>
                      </svg>
                    </span>
                    <div className="header-dropdown_content">
                      <div className="menu-mobile">
                        <nav className="menu-list">
                          {mainNav.map((item, index) => (
                            <div key={index} className="menu-item">
                              <Link
                                to={item.path}
                                onClick={() => dropdownToggle("menu-mobile")}
                              >
                                {item.display}
                                <i
                                  className={`${
                                    item.svgIcon !== true && "none-el"
                                  }`}
                                >
                                  <svg
                                    className="icon icon--arrow-right"
                                    viewBox="0 0 8 12"
                                    role="presentation"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      d="M2 2l4 4-4 4"
                                      fill="none"
                                      strokeLinecap="square"
                                    ></path>
                                  </svg>
                                </i>
                              </Link>
                            </div>
                          ))}
                          <div className="mm-divider">
                            <p className="mobile-menu__section-title">
                              B???n c???n h??? tr????
                            </p>
                            <div className="mobile-menu__help-wrapper">
                              <svg
                                className="icon icon--bi-phone"
                                viewBox="0 0 24 24"
                                role="presentation"
                              >
                                <g
                                  strokeWidth="2"
                                  fill="none"
                                  fillRule="evenodd"
                                  strokeLinecap="square"
                                >
                                  <path
                                    d="M17 15l-3 3-8-8 3-3-5-5-3 3c0 9.941 8.059 18 18 18l3-3-5-5z"
                                    stroke="#1e2d7d"
                                  ></path>
                                  <path
                                    d="M14 1c4.971 0 9 4.029 9 9m-9-5c2.761 0 5 2.239 5 5"
                                    stroke="#00badb"
                                  ></path>
                                </g>
                              </svg>
                              <Link to={`/${Config.HOME_PAGE}`}>
                                Li??n h???: {phone[0].value} - {phone[1].value}
                              </Link>
                            </div>
                            <div className="mobile-menu__help-wrapper">
                              <svg
                                className="icon icon--bi-email"
                                viewBox="0 0 22 22"
                                role="presentation"
                              >
                                <g fill="none" fillRule="evenodd">
                                  <path
                                    stroke="#00badb"
                                    d="M.916667 10.08333367l3.66666667-2.65833334v4.65849997zm20.1666667 0L17.416667 7.42500033v4.65849997z"
                                  ></path>
                                  <path
                                    stroke="#1e2d7d"
                                    strokeWidth="2"
                                    d="M4.58333367 7.42500033L.916667 10.08333367V21.0833337h20.1666667V10.08333367L17.416667 7.42500033"
                                  ></path>
                                  <path
                                    stroke="#1e2d7d"
                                    strokeWidth="2"
                                    d="M4.58333367 12.1000003V.916667H17.416667v11.1833333m-16.5-2.01666663L21.0833337 21.0833337m0-11.00000003L11.0000003 15.5833337"
                                  ></path>
                                  <path
                                    d="M8.25000033 5.50000033h5.49999997M8.25000033 9.166667h5.49999997"
                                    stroke="#00badb"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                  ></path>
                                </g>
                              </svg>
                              <Link to={`/${Config.HOME_PAGE}`}>
                                {email[0].value}
                              </Link>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col header-upper-logo">
            <div className="wrap-logo">
              <Link to={`/${Config.HOME_PAGE}`}>
                <img src={logo} alt="nobita home" />
              </Link>
            </div>
          </div>

          <div className="col header-upper-icon">
            <div className="wrap-icon">
              <div
                className="header-action header-action__search"
                ref={dropdownSearchRef}
              >
                <div className="header-action_text">
                  <span onClick={() => dropdownToggle("search")}>
                    <i className="bx bx-search"></i>
                  </span>
                </div>
                <div className="header-action_dropdown">
                  <span className="box-triangle">
                    <svg viewBox="0 0 20 9" role="presentation">
                      <path
                        d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <div className="header-dropdown_content">
                    <p className="ttbold">T??m ki???m</p>
                    <div className="site_search">
                      <form>
                        <input
                          type="text"
                          className="input-search"
                          placeholder="T??m ki???m s???n ph???m..."
                        />
                        <button type="submit" className="btn btn-search">
                          <i className="bx bx-search"></i>
                        </button>
                      </form>
                      <div className="searchResult">
                        <div className="item-ult">
                          <div className="thumbs">
                            <Link to={`/${Config.HOME_PAGE}`}>
                              <img src={logo} alt="" />
                            </Link>
                          </div>
                          <div className="title">
                            <Link to={`/${Config.HOME_PAGE}`}>
                              slim fit jeans lc
                            </Link>
                            <p>325,000???</p>
                          </div>
                        </div>
                        <div className="resultMore">
                          <Link to={`/${Config.HOME_PAGE}`}>
                            Xem th??m 42 s???n ph???m
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="header-action header-action__account"
                ref={dropdownAccountRef}
              >
                <div className="header-action_text">
                  <span onClick={() => dropdownToggle("account")}>
                    <i className="bx bxs-user-circle"></i>
                  </span>
                </div>
                <div className="header-action_dropdown">
                  <span className="box-triangle">
                    <svg viewBox="0 0 20 9" role="presentation">
                      <path
                        d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <div className="header-dropdown_content">
                    <div className="site_account">
                      <div className="site_account_header">
                        <h2>????ng nh???p t??i kho???n</h2>
                        <p>Nh???p email v?? m???t kh???u c???a b???n</p>
                      </div>
                      <div className="site_account_inner">
                        <form>
                          <div className="form-group">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="form-group">
                            <input type="password" placeholder="M???t kh???u" />
                            <div className="sitebox-recaptcha">
                              This site is protected by reCAPTCHA and the Google{" "}
                              <Link to={`/${Config.HOME_PAGE}`}>
                                Privacy Policy
                              </Link>{" "}
                              and{" "}
                              <Link to={`/${Config.HOME_PAGE}`}>
                                Terms of Service
                              </Link>{" "}
                              apply.
                            </div>
                          </div>
                          <Link to={`/${Config.HOME_PAGE}`}>
                            <Button>????ng nh???p</Button>
                          </Link>
                        </form>
                        <div className="site_account_secondary-action">
                          <p>
                            Kh??ch h??ng m???i?{" "}
                            <Link to={`/${Config.HOME_PAGE}/account/register`}>
                              T???o t??i kho???n
                            </Link>
                          </p>
                          <p>
                            Qu??n m???t kh???u?{" "}
                            <Link to={`/${Config.HOME_PAGE}`}>
                              Kh??i ph???c m???t kh???u
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="header-action header-action__cart"
                ref={dropdownCartRef}
              >
                <div className="header-action_text">
                  <span onClick={() => dropdownToggle("cart")}>
                    <i className="bx bx-cart"></i>
                  </span>
                </div>
                <div className="header-action_dropdown">
                  <span className="box-triangle">
                    <svg viewBox="0 0 20 9" role="presentation">
                      <path
                        d="M.47108938 9c.2694725-.26871321.57077721-.56867841.90388257-.89986354C3.12384116 6.36134886 5.74788116 3.76338565 9.2467995.30653888c.4145057-.4095171 1.0844277-.40860098 1.4977971.00205122L19.4935156 9H.47108938z"
                        fill="#ffffff"
                      ></path>
                    </svg>
                  </span>
                  <div className="header-dropdown_content">
                    <div className="site_cart">
                      <div className="cart-ttbold">
                        <p>Gi??? h??ng</p>
                      </div>
                      <div className="cart-view">
                        <div className="cart-view-scroll">{showCartList()}</div>
                        <div className="line"></div>
                        <div className="cart-view-total">
                          <div className="cart-view-total-row">
                            <div className="cart-view-total-col pl-0">
                              <p>T???ng ti???n:</p>
                            </div>
                            <div
                              id="total-view-cart"
                              className="cart-view-total-col pr-0"
                            >
                              {new Intl.NumberFormat().format(subTotal())}??
                            </div>
                          </div>
                          <div className="cart-view-total-row">
                            <div className="cart-view-total-col pl-0">
                              <Link to={`/${Config.HOME_PAGE}`}>
                                <Button>Xem gi??? h??ng</Button>
                              </Link>
                            </div>
                            <div className="cart-view-total-col pr-0">
                              <Link to={`/${Config.HOME_PAGE}`}>
                                <Button>Thanh to??n</Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderUpperMiddle.propsTypes = {
  mainNav: PropTypes.array.isRequired,
};

export default HeaderUpperMiddle;
