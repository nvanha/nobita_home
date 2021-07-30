import React from "react";

const Button = (props) => {
  return (
    <button type="submit" className="form__submit">
      {props.children}
    </button>
  );
};

export default Button;
