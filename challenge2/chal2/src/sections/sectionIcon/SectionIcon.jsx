import React from "react";
import "./sectionIcon.css";
import icon1 from "../../assets/brand-1.png";
import icon2 from "../../assets/brand-2.png";
import icon3 from "../../assets/brand-3.png";
import icon4 from "../../assets/brand-4.png";
import icon5 from "../../assets/brand-5.png";

const SectionIcon = () => {
  return (
    <div className="icons">
      <img src={icon1} alt="" />
      <img src={icon3} alt="" />
      <img src={icon4} alt="" />
      <img src={icon5} alt="" />
      <img src={icon2} alt="" />
    </div>
  );
};

export default SectionIcon;
