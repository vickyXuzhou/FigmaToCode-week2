import React from "react";
import search from "../../assets/search.png";
import arrow from "../../assets/arrow.png";
import person from "../../assets/person.png";
import shoping from "../../assets/shipping.png";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerPart1">
        <img src={search} alt="" />
      </div>
      <div className="line"></div>
      <div className="headerPart2">
        <div className="headerImg">
          <img src={arrow} alt="" />
        </div>
        <h3 className="headerH3">CORAL</h3>
        <div className="headerImg">
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="headerPart3">
        <div className="headerPart">
          <div className="headerImg">
            <img src={person} alt="" />
          </div>
          <p>Account</p>
        </div>
        <div className="headerPart">
          <div className="headerImg">
            <img src={shoping} alt="" />
          </div>
          <p>Shoping</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
