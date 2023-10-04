import React from "react";
import Vacancy from "../Vacancy/Vacancy";
import Tourism from "../Tourism/Tourism";
import Education from "../Education/Education";
import "./main.scss";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <Vacancy />
      <Tourism />
      <Education />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Main;
