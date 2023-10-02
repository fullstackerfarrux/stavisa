import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Header from "../../Components/Header/Header";
import "./home.scss";
import Main from "../../Components/Main/Main";
import { Link } from "react-router-dom";
import Banners from "../../Components/Banners/Banners";

const Home = () => {
  const { cart } = useSelector((cart) => cart);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [vacancies, setVacancies] = useState();
  const [slider, setSlider] = useState(0);
  let desktop = [
    "/tourism.jpg",
    "/banner_education.jpg",
    "/vacancy_banner.jpg",
  ];
  let mobile = [
    "/mobile_tourism.jpg",
    "/mobile_education.jpg",
    "/mobile_vacancy.jpg",
  ];

  useEffect(() => {
    async function get() {
      await fetch("https://admin.staviza.uz/api/vacancies", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setVacancies(data));
    }

    get();
  }, []);

  return (
    <>
      <Header />
      {window.innerWidth < 780 ? (
        <div className="home" ref={emblaRef}>
          <div className="embla__container">
            {vacancies?.map((p, index) => (
              <div
                className="home"
                key={index}
                style={{
                  backgroundImage: `url(${p.photo})`,
                }}
              >
                <div className="blur">
                  <div className="container">
                    <main
                      className="main"
                      onClick={() => setSlider(slider + 1)}
                    >
                      <div className="buttons">
                        <Link to={`/vacancy/${p.id}`}>
                          <button className="more">
                            {cart.language == "uz" ? `Batafsil` : `Подробнее`}
                          </button>
                        </Link>
                        <button className="sign">
                          {cart.language == "uz"
                            ? `Ro'yxatdan o'tish`
                            : `Подавать заявление`}
                        </button>
                      </div>
                    </main>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="home" ref={emblaRef}>
          <div className="embla__container">
            {window.innerWidth < 760
              ? mobile?.map((p, index) => (
                  <div
                    className="home"
                    key={index}
                    style={{
                      backgroundImage: `url(${p})`,
                    }}
                  >
                    <div className="blur">
                      <div className="container">
                        <main
                          className="main"
                          onClick={() => setSlider(slider + 1)}
                        >
                          {cart.language !== "uz" ? (
                            <h1>
                              {index == 0
                                ? `Путешествуйте с «STA VISA»`
                                : index == 1
                                ? "Ты хочешь учиться за границей?"
                                : "Работать за границей легко"}
                            </h1>
                          ) : (
                            <h1>
                              {index == 0
                                ? `"STA VISA" bilan sayohat qiling`
                                : index == 1
                                ? "Chet elda o'qishni istaysizmi?"
                                : "Chet elda ishlash oson"}
                            </h1>
                          )}
                          {cart.language !== "uz" ? (
                            <p>
                              {index == 0
                                ? "Пора идти далеко? Или для тебя это хлопотно? Тогда эта коллекция турпакетов для вас!"
                                : index == 1
                                ? `«STA VISA» — одно из ведущих агентств Узбекистана, занимающееся отправкой студентов на обучение за границу.`
                                : "STA VISA – рекрутинговое агентство в Узбекистане и эксперт по поиску талантливых людей."}
                            </p>
                          ) : (
                            <p>
                              {index == 0
                                ? "Uzoqqa borishga vaqt yoqmi? Yoki bu siz uchun mashaqqatmi? Unda bu erdagi tur paketlar to`plami siz uchundir!."
                                : index == 1
                                ? `"STA VISA" talabalarni chet elga o'qishga yuborish bilan shug'illanib kelayotgan O'zbekistondagi eng yetakchi agentliklardan biri.`
                                : "STA Visa - O'zbekistondagi rekruting agentligi va iqtidorli odamlarni izlash bo'yicha ekspert hisoblanadi."}
                            </p>
                          )}
                          {index == 0 ? (
                            ""
                          ) : index == 1 ? (
                            ""
                          ) : (
                            <Link to={"/vacancies"}>
                              <button>
                                {cart.language == "uz"
                                  ? `Ro'yxatdan o'tish`
                                  : `Зарегистрироваться`}
                              </button>
                            </Link>
                          )}
                        </main>
                      </div>
                    </div>
                  </div>
                ))
              : desktop?.map((p, index) => (
                  <div
                    className="home"
                    key={index}
                    style={{
                      backgroundImage: `url(${p})`,
                    }}
                  >
                    <div className="blur">
                      <div className="container">
                        <main
                          className="main"
                          onClick={() => setSlider(slider + 1)}
                        >
                          {cart.language !== "uz" ? (
                            <h1>
                              {index == 0
                                ? `Путешествуйте с «STA VISA»`
                                : index == 1
                                ? "Ты хочешь учиться за границей?"
                                : "Работать за границей легко"}
                            </h1>
                          ) : (
                            <h1>
                              {index == 0
                                ? `"STA VISA" bilan sayohat qiling`
                                : index == 1
                                ? "Chet elda o'qishni istaysizmi?"
                                : "Chet elda ishlash oson"}
                            </h1>
                          )}
                          {cart.language !== "uz" ? (
                            <p>
                              {index == 0
                                ? "Пора идти далеко? Или для тебя это хлопотно? Тогда эта коллекция турпакетов для вас!"
                                : index == 1
                                ? `«STA VISA» — одно из ведущих агентств Узбекистана, занимающееся отправкой студентов на обучение за границу.`
                                : "STA VISA – рекрутинговое агентство в Узбекистане и эксперт по поиску талантливых людей."}
                            </p>
                          ) : (
                            <p>
                              {index == 0
                                ? "Uzoqqa borishga vaqt yoqmi? Yoki bu siz uchun mashaqqatmi? Unda bu erdagi tur paketlar to`plami siz uchundir!."
                                : index == 1
                                ? `"STA VISA" talabalarni chet elga o'qishga yuborish bilan shug'illanib kelayotgan O'zbekistondagi eng yetakchi agentliklardan biri.`
                                : "STA Visa - O'zbekistondagi rekruting agentligi va iqtidorli odamlarni izlash bo'yicha ekspert hisoblanadi."}
                            </p>
                          )}
                          {index == 0 ? (
                            ""
                          ) : index == 1 ? (
                            ""
                          ) : (
                            <Link to={"/vacancies"}>
                              <button>
                                {cart.language == "uz"
                                  ? `Ro'yxatdan o'tish`
                                  : `Зарегистрироваться`}
                              </button>
                            </Link>
                          )}
                        </main>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}

      <Banners />
      <Main />
    </>
  );
};

export default Home;
