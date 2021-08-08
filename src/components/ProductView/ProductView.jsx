import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "./../Button/Button";

const ProductView = (props) => {
  const { product } = props;

  const [productImgMobile, setProductImgMobile] = useState(product.image01);

  const [color, setColor] = useState(product.colors[0]);

  const [size, setSize] = useState(product.size[0]);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProductImgMobile(product.image01);
    setQuantity(1);
    setColor(product.colors[0]);
    setSize(product.size[0]);
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
      case "xanh":
        return {
          backgroundColor: "#aec6cf",
        };
      case "xám":
        return {
          backgroundColor: "#d2dae2",
        };
      case "kem":
        return {
          backgroundColor: "#f8f2da",
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
    alert(
      `Add Products Successful\n- Name: ${product.name}\n- Color: ${color}\n- Size: ${size}\n- Quantity: ${quantity}\n\nThe Website is Developing!!!`
    );
  };

  return (
    <div className="product-view">
      <div className="product__image">
        <nav className="product__image__list">
          <div className="product__image__item">
            <img src={product.image01} alt="image01" />
          </div>
          <div className="product__image__item">
            <img src={product.image02} alt="image02" />
          </div>
          <div className="product__image__item">
            <img src={product.image02} alt="image03" />
          </div>
          <div className="product__image__item">
            <img src={product.image01} alt="image04" />
          </div>
        </nav>

        <nav className="product__image__list-mobile">
          <div className="product__image__item-mobile">
            <img src={productImgMobile} alt="imageMobile" />
          </div>

          <div className="product__image__control-mobile">
            <div className="dot active"></div>
            <div className="dot"></div>
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
                  <span>Giảm 20%</span>
                </div>
                <div className="ega-promobox__mini-v">
                  <span>Giảm 15%</span>
                </div>
                <div className="ega-promobox__mini-v">
                  <span>Giảm 10%</span>
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
};

export default ProductView;
