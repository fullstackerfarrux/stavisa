import React from "react";
import { useSelector } from "react-redux";
import "./education.scss";

const Education = () => {
  const { cart } = useSelector((cart) => cart);

  return (
    <>
      <section id="education">
        <div className="circle">
          <div className="filter"></div>
          <h1>{cart.language == "uz" ? `Ta'lim` : `Образования`}</h1>
          <div className="wand"></div>
          <img src="/right.png" alt="image" />
        </div>
        <div className="about">
          <div className="container flex box">
            <img src="/about_tourizm.png" alt="image" />
            <div className="info">
              <h2>
                {cart.language == "uz"
                  ? `Siz uchun eng yaxshi ta'lim xizmatlari ko'rsatish`
                  : `Для вас самые лучшие учебные программы`}
              </h2>
              <p>
                {cart.language == "uz"
                  ? `Hozirgi kunda bizda dunyo bo'ylab 2000 dan ortiq ta'lim dasturlari mavjud - bu maktabga tayyorgarlik, o'rta oliy ta'lim, Angliyaning, AQShning, Germaniyaning, Fransiyaning, Polshaning, Latviyaning, Chexiyaning va boshqa mamlakatlarning eng yaxshi universitetlarida o'qishga kirish va oliy ma'lumot olish uchun tayyorgarlik`
                  : `На данный момент у нас имеется более 2000 образовательных программ по всему миру - это подготовка к школе, среднее образование - учеба в школе, подготовка к поступлению и высшее образование в лучших ВУЗах Англии, США, Германии, Франции, Польши, Латвии, Чехии и других европейских стран, Южной Кореи, Японии и т.д.`}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="circle">
            <div className="filter"></div>
            <h2>{cart.language == "uz" ? `Universitetlar` : `Университеты`}</h2>
            <div className="wand"></div>
          </div>
          <div className="university">
            <div className="child1">
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(/university1.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <h4>Cambridge</h4>
                <p>University of Cambridge</p>
              </div>
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(/university2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <h4>Cambridge</h4>
                <p>Harvard University</p>
              </div>
            </div>
            <div className="child2">
              <div
                className="card_image2"
                style={{
                  backgroundImage: "url(./university3.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <h4>Oxford</h4>
                <p>University of Oxford</p>
              </div>
            </div>
            <div className="child1">
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(./university4.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <h4>Stanford</h4>
                <p>Stanford University</p>
              </div>
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(./university5.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                <h4>London</h4>
                <p>Imperial College London</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
