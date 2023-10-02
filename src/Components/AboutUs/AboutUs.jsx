import React from "react";
import { useSelector } from "react-redux";
import "./aboutus.scss";

const AboutUs = () => {
  const { cart } = useSelector((cart) => cart);

  return (
    <>
      <div id="aboutus">
        <div className="box container">
          <h1>
            {cart.language == "uz"
              ? `Natijalarimiz raqamlarda`
              : `Наши результаты в цифрах`}
          </h1>
          <div className="flex">
            <div className="registered">
              <i
                className="fa-solid fa-address-card"
                style={{ color: "#002952" }}
              ></i>
              <p>5083 +</p>
              <h3>
                {cart.language == "uz"
                  ? `Ro'xatga olingan`
                  : `Зарегистрированный`}
              </h3>
            </div>
            <div className="visa">
              <i
                class="fa-solid fa-id-card-clip"
                style={{ color: "#B71414" }}
              ></i>
              <p>2316 +</p>
              <h3>{cart.language == "uz" ? `Visa` : `Виза`}</h3>
            </div>
          </div>
          <div className="flex">
            <div className="work">
              <i
                className="fa-solid fa-earth-americas"
                style={{ color: "#002952" }}
              ></i>
              <p>567 +</p>
              <h3>{cart.language == "uz" ? `Vakansiya` : `Вакансии`}</h3>
            </div>
            <div className="partner">
              <i
                className="fa-solid fa-handshake-simple"
                style={{ color: "#B71414" }}
              ></i>
              <p>316 +</p>
              <h3>{cart.language == "uz" ? `Hamkorlar` : `Партнеры`}</h3>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <h2>Klient</h2>
        </div> */}
      </div>
    </>
  );
};

export default AboutUs;
