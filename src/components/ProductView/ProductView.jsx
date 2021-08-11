import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "./../Button/Button";

const ProductView = (props) => {
  const { product } = props;

  const [productImgMobile, setProductImgMobile] = useState(product.images[0]);

  const [color, setColor] = useState(product.colors[0]);

  const [size, setSize] = useState(product.size[0]);

  const [quantity, setQuantity] = useState(1);

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setProductImgMobile(product.images[0]);
    setQuantity(1);
    setColor(product.colors[0]);
    setSize(product.size[0]);
    setDiscount(0);
  }, [product]);

  const convertColor = (color) => {
    switch (color) {
      case "kaki":
        return {
          backgroundColor: "#c3b091",
        };
      case "nâu":
        return {
          backgroundColor: "#836953",
        };
      case "đen":
        return {
          backgroundColor: "#000000",
        };
      case "trắng":
        return {
          backgroundColor: "rgb(245 245 245)",
        };
      case "xanh rêu":
        return {
          backgroundColor: "#586744",
        };
      case "xanh đậm":
        return {
          backgroundColor: "#0e4d92",
        };
      case "xanh đen":
        return {
          backgroundColor: "#0c2461",
        };
      case "xanh nhạt":
        return {
          backgroundColor: "#4B5C6E",
        };
      case "xanh khói":
        return {
          backgroundColor: "#626167",
        };
      case "xanh":
        return {
          backgroundColor: "#aec6cf",
        };
      case "xám đậm":
        return {
          backgroundColor: "#6d6d6d",
        };
      case "xám nhạt":
        return {
          backgroundColor: "#6d6d6d",
        };
      case "xám":
        return {
          backgroundColor: "#d2dae2",
        };
      case "kem":
        return {
          backgroundColor: "#f8f2da",
        };
      case "vàng":
        return {
          backgroundColor: "#e8b828",
        };
      default:
        return {
          backgroundColor: "red",
        };
    }
  };

  const updateQuantity = (action) => {
    if (action === "minus") {
      setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);
    } else if (action === "plus") {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    const details = {
      color: color !== undefined ? color : "",
      size: size !== undefined ? size : "",
      discount,
      quantity,
    };
    props.addToCart(product, details);
    setQuantity(1);
    setColor(product.colors[0]);
    setSize(product.size[0]);
    setDiscount(0);
  };

  return (
    <div className="product-view">
      <div className="product__image">
        <nav className="product__image__list">
          {product.images.map((item, index) => (
            <div key={index} className="product__image__item">
              <img src={item} alt={`image0${index + 1}`} />
            </div>
          ))}
        </nav>

        <nav className="product__image__list-mobile">
          <div className="product__image__item-mobile">
            <img src={productImgMobile} alt="imageMobile" />
          </div>

          <div className="product__image__control-mobile">
            {product.images.map((item, index) => (
              <div
                key={index}
                className={`${
                  productImgMobile === item ? "dot active" : "dot"
                }`}
                onClick={() => setProductImgMobile(item)}
              ></div>
            ))}
          </div>
        </nav>
      </div>

      <div className="product__info">
        <div className="product__title">
          <h1>{product.name}</h1>

          <span className="pro_sku">SKU: {product.sku}</span>

          <div className="ega-promobox__wrapper">
            <div className="ega-promobox__label">
              <span>Mã Giảm Giá</span>
            </div>

            <div className="ega-promobox__label-wrapper">
              <div className="ega-promobox__mini-v-wrapper">
                <div className="ega-promobox__mini-v">
                  <span
                    className={`${discount === 20 ? "active" : ""}`}
                    onClick={() => setDiscount(20)}
                  >
                    Giảm 20%
                  </span>
                </div>
                <div className="ega-promobox__mini-v">
                  <span
                    className={`${discount === 15 ? "active" : ""}`}
                    onClick={() => setDiscount(15)}
                  >
                    Giảm 15%
                  </span>
                </div>
                <div className="ega-promobox__mini-v">
                  <span
                    className={`${discount === 10 ? "active" : ""}`}
                    onClick={() => setDiscount(10)}
                  >
                    Giảm 10%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product__price">
          <span>{new Intl.NumberFormat().format(product.price)}₫</span>
        </div>

        <div className="product__action">
          <div className="product__action__colors">
            <div className="product__action__colors__title">{color}</div>

            <div className="product__action__colors__list">
              {product.colors.map((item, index) => (
                <div
                  key={index}
                  className={`product__action__colors__item ${
                    color === item ? "active" : ""
                  }`}
                  onClick={() => setColor(item)}
                >
                  <div
                    className={`circle-color`}
                    style={convertColor(item)}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          <div className="product__action__size">
            <div className="product__action__size__title">Kích thước</div>

            <div className="product__action__size__list">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product__action__size__item ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  <div className="square-size">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="product__action__quantity">
            <div
              className="product__action__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>

            <div className="product__action__quantity__input">{quantity}</div>

            <div
              className="product__action__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>

          <div className="product__action__button">
            <Button onClick={() => addToCart()}>Thêm vào giỏ</Button>
          </div>
        </div>

        <div className="product__details">
          <div className="product__details__title">
            <h2>Mô tả</h2>
          </div>

          <div
            className="product__details__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductView;
