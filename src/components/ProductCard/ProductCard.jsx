import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import * as Config from "./../../constants/Config";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card-inner">
        <div className="product-img">
          <Link to={`/${Config.HOME_PAGE}/products/${props.slug}`}>
            <img src={props.image01} alt={props.name} />
            <img src={props.image02} alt={props.name} />
          </Link>
        </div>

        <div className="product-details">
          <h3 className="product-name">
            <Link to={`/${Config.HOME_PAGE}/products/${props.slug}`}>
              {props.name}
            </Link>
          </h3>
          <p className="product-prices">
            {new Intl.NumberFormat().format(props.price)}₫
          </p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image01: PropTypes.string.isRequired,
  image02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
