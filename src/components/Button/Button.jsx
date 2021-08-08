import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type="submit"
      className="form__submit"
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
