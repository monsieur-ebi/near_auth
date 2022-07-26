import React from "react";
import PropTypes from "prop-types";
import { initConn } from "../Auth";

export const Button = ({ text, color, handleClick }) => {
  const btnStyle = {
    textAlign: "center",
    backgroundColor: color,
    padding: "1rem",
    fontSize: "0.95rem",
    color: "#fff",
    borderRadius: "1rem",
    borderStyle: "hidden",
  };

  return (
    <>
      <button
        onClick={() => initConn()}
        onMouseOver={handleClick}
        style={btnStyle}
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "Connect",
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  handleClick: PropTypes.func,
};
