import React from "react";
import { useSelector } from "react-redux";
import "./tourism.scss";

const Tourism = () => {
  const { cart } = useSelector((cart) => cart);
  return (
    <>
      <section id="tourism">
        <div className="circle">
          <div className="filter"></div>
          <h1>{cart.language == "uz" ? `Turizm` : `Туризм`}</h1>
          <div className="wand"></div>
          <img src="/right.png" alt="image" />
        </div>
        <div className="about">
          <div className="container flex box">
            <div className="info">
              <h2>
                {cart.language == "uz"
                  ? `"STA VISA" bilan sayohat qiling`
                  : `Путешествуйте с «STA VISA»`}
              </h2>
              <p>
                {cart.language == "uz"
                  ? `Uzoqqa borishga vaqt yoqmi? Yoki bu siz uchun mashaqqatmi? Unda bu erdagi tur paketlar to'plami siz uchundir!.`
                  : `Пора идти далеко? Или для тебя это хлопотно? Тогда эта коллекция турпакетов для вас!`}
              </p>
            </div>
            <img src="/about_tourizm.png" alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="banner">
            <h2>
              {cart.language == "uz"
                ? `SAYOHAT QILING ROHAT OLASIZ`
                : `ПУТЕШЕСТВУЙТЕ И НАСЛАЖДАЙТЕСЬ`}
            </h2>
            <h4>
              {cart.language == "uz"
                ? `Dengizda cho'milishni va mayin oftobda dam olishni istaysizmi? Unda bizning tur paketlarimiz to'plami siz uchun.`
                : `Хотите искупаться в море и отдохнуть под ласковым солнцем? Тогда наши турпакеты для вас.`}
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tourism;
