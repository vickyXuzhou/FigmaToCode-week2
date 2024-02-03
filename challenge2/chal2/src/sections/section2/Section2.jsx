import React from "react";
import "./section2.css";
import bigPic from "../../assets/bigPic.png";
import pic1 from "../../assets/01.png";
import pic2 from "../../assets/02.png";
import pic3 from "../../assets/03.png";
import pic4 from "../../assets/20.png";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="bigPic">
        <img src={bigPic} alt="" />
      </div>
      <div className="semiPic">
        <div>
          <img src={pic1} alt="" />
        </div>
        <div>
          <img src={pic2} alt="" />
        </div>
        <div>
          <img src={pic3} alt="" />
        </div>
        <div>
          <img src={pic4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
