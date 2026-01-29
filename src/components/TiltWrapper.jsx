import React from "react";
import Tilt from "react-parallax-tilt";

const TiltWrapper = ({ children, className = "", options = {}, style = {}, ...rest }) => {
  const { max = 25, scale = 1, speed = 300 } = options;

  return (
    <Tilt
      tiltMaxAngleX={max}
      tiltMaxAngleY={max}
      scale={scale}
      transitionSpeed={speed}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </Tilt>
  );
};

export default TiltWrapper;
