import React from "react";
import "./section4.css";
import girl from "../../assets/girl.png";
import zara from "../../assets/zara.png";
import zara2 from "../../assets/zara2.png";
import Button from "../../components/button/Button";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="sec4Img">
        <img src={girl} alt="" />
      </div>
      <img className="zaraBig" src={zara} alt="" />
      <div className="section4Text">
        <div className="zara2Div">
          <img src={zara2} alt="" />
        </div>
        <div className="section4minisec">
          <p>
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <div className="sec4Btn">
            <Button
              background="white"
              color="black"
              text="See Collection"
              img=""
              width="8"
              height="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
