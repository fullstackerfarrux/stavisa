import React from "react";
import { useSelector } from "react-redux";
import "./footer.scss";

const Footer = () => {
  const { cart } = useSelector((cart) => cart);

  return (
    <>
      <div id="footer">
        <div className="container">
          <img src="logo.png" alt="" />
          <a href="tel:+998901230321">+998901230321</a>
          <a href="mailto: abc@example.com">info@stavisa.uz</a>
          <p>100128, Узбекистан, Ташкент, ул. Абая, 13А </p>

          <h2>Навигация</h2>
          <ul>
            <li className="li">
              <a href="/#vacancy">
                {cart.language !== "uz" ? "Вакансия" : "Vakansiya"}
              </a>
            </li>
            <li className="li">
              <a href="/#tourism">
                {cart.language !== "uz" ? "Туризм" : "Turizm"}
              </a>
            </li>
            <li className="li">
              <a href="/#education">
                {cart.language !== "uz" ? "Образование" : "Ta'lim"}
              </a>
            </li>
            <li className="li">
              <a href="/#aboutus">
                {cart.language !== "uz" ? "О нас" : "Biz haqimizda"}
              </a>
            </li>
          </ul>
          <h2>Ссылки на социальные сети</h2>
          <p>Подписывайтесь на наши страницы в социальных сетях!</p>
          <div className="flex">
            <div className="circle">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="circle">
              <i className="fa-brands fa-telegram"></i>
            </div>
            <div className="circle">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="circle">
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
