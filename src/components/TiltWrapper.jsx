import React, { useRef, useState } from "react";

const TiltWrapper = ({ children, className = "", options = {}, style = {}, ...rest }) => {
  const { max = 25, scale = 1, speed = 300 } = options;
  const ref = useRef(null);
  const [state, setState] = useState({ rotateX: 0, rotateY: 0, isHover: false });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) - 0.5; // -0.5 .. 0.5
    const py = (y / rect.height) - 0.5;

    const rotateY = px * max * 2; // left/right
    const rotateX = -py * max * 2; // up/down

    setState({ rotateX, rotateY, isHover: true });
  };

  const handleLeave = () => {
    setState({ rotateX: 0, rotateY: 0, isHover: false });
  };

  const innerStyle = {
    transform: `perspective(1000px) rotateX(${state.rotateX}deg) rotateY(${state.rotateY}deg) scale(${state.isHover ? scale : 1})`,
    transition: `transform ${Math.max(80, speed)}ms ease`,
    transformStyle: "preserve-3d",
    willChange: "transform",
  };

  return (
    <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave} {...rest}>
      <div style={{ ...innerStyle, ...style }}>{children}</div>
    </div>
  );
};

export default TiltWrapper;
