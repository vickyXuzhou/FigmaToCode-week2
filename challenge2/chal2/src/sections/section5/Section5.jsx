import React from "react";
import "./section5.css";
import SquareCon from "../../components/squareContainer/SquareCon";
import Button from "../../components/button/Button";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
const Section5 = () => {
  return (
    <div className="section3">
      <h2 className="secH2">Best Sellers</h2>
      <div className="secment1">
        <div className="listItemSec3">
          <ul>
            <li>All Products</li>
            <li>T-shirts</li>
            <li>Hoodies</li>
            <li>Jacket</li>
          </ul>
        </div>
        <div>
          <Button
            background="black"
            color="white"
            text="Show All"
            img=""
            width="5"
            height="1.5"
          />
        </div>
      </div>
      <div className="secment2">
        <SquareCon img={person1} />
        <SquareCon img={person2} />
        <SquareCon img={person3} />
        <SquareCon img={person4} />
        {/* <SquareCon img={person5} />
        <SquareCon img={person6} />
        <SquareCon img={person7} />
        <SquareCon img={person8} /> */}
      </div>
    </div>
  );
};

export default Section5;
