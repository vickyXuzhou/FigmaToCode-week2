import React from "react";
import "./section6.css";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";

const Section6 = () => {
  return (
    <div className="section6">
      <h2>Follow Products And Discounts On Instagram</h2>
      <div className="Section6Secment">
        <div className="section6Img">
          <img src={card1} alt="" />
        </div>
        <div className="section6Img">
          <img src={card2} alt="" />
        </div>
        <div className="section6Img">
          <img src={card3} alt="" />
        </div>
        <div className="section6Img">
          <img src={card4} alt="" />
        </div>
        <div className="section6Img">
          <img src={card5} alt="" />
        </div>
        <div className="section6Img">
          <img src={card6} alt="" />
        </div>
      </div>
      <h2>Or Subscribe To Our NewsLetter</h2>
      <div className="section6Secment2">
        <p>Email Address</p>
        <p>Submit</p>
      </div>
    </div>
  );
};

export default Section6;
