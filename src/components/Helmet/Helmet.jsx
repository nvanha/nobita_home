import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = `${props.title ? props.title + " - " : ""}Nobita Home`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{props.children}</>;
};

Helmet.propTypes = {
  title: PropTypes.string,
};

export default Helmet;
