import { useState } from "react";
import "./App.css";
import Header from "./sections/header/Header";
import Header2 from "./sections/header2/Header2";
import HeaderBody from "./sections/headerbody/HeaderBody";
import SectionIcon from "./sections/sectionIcon/SectionIcon";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/section5";
import Section6 from "./sections/section6/Section6";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Header2 />
      <HeaderBody />
      <SectionIcon />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
