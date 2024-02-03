import React from "react";
import "./headerbody.css";
import Button from "../../components/button/Button";
import shopWhite from "../../assets/shopWhite.png";
import headerPhoto from "../../assets/headerPhoto.png";
import flower from "../../assets/flower.png";
import half from "../../assets/half-flower.png";

const HeaderBody = () => {
  return (
    <div className="headerbody">
      <div className="sectionHeaderBody space">
        <h2>Collections</h2>
        <p>
          you can explore ans shop many differnt collection from various barands
          here.
        </p>
        <div className="btn">
          <Button
            background="black"
            color="white"
            text="Shop Now"
            img={shopWhite}
            width="8"
            height="2"
          />
        </div>
      </div>
      <div className="sectionHeaderBody headerImg">
        <img className="headerBodyImg" src={headerPhoto} alt="" />
      </div>
      <img className="half" src={half} alt="" />
      <img className="flower" src={flower} alt="" />
    </div>
  );
};

export default HeaderBody;
