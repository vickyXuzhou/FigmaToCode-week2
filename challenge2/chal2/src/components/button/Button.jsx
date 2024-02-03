import React from "react";
import "./button.css";
const Button = ({ width, height, color, img, text, background }) => {
  return (
    <div
      className="button"
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        color: `${color}`,
        background: `${background}`,
      }}
    >
      <img src={img} alt="" /> {text}
    </div>
  );
};

export default Button;
