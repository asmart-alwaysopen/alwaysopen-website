import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./GradientText.css";

const GradientText = ({
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 3,
  showBorder = false,
  className = "",
  children,
  ...props
}) => {
  const gradientId = useRef(`gradient-${Math.random().toString(36).substr(2, 9)}`);
  const style = {
    "--gradient-colors": colors.join(", "),
    "--gradient-speed": `${animationSpeed}s`,
  };
  return (
    <span
      className={`gradient-text${showBorder ? " gradient-text-border" : ""} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </span>
  );
};

GradientText.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  animationSpeed: PropTypes.number,
  showBorder: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default GradientText; 