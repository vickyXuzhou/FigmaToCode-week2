import React from "react";
import "./squareCon.css";
import person1 from "../../assets/person1.png";
const SquareCon = ({ img }) => {
  return (
    <div className="squareCon">
      <div className="squareConImg">
        <img src={img} alt="" />
      </div>
      <div className="SquareConSection">
        <p className="squareP">Yellow Reserved Hoodie</p>
        <div className="SquareConMiniSection">
          <p className="squarePlight">Dress</p>
          <div className="pContainer">
            <p className="squarePlight">$364.00</p>
            <p className="squareP">$155.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareCon;
