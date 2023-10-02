import React from "react";
import Vacancy from "../Vacancy/Vacancy";
import Tourism from "../Tourism/Tourism";
import Education from "../Education/Education";
import "./main.scss";
import AboutUs from "../AboutUs/AboutUs";

const Main = () => {
  return (
    <>
      <Vacancy />
      <Tourism />
      <Education />
      <AboutUs />
    </>
  );
};

export default Main;
