import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./vacancy.scss";
import { Link } from "react-router-dom";

const Vacancy = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((cart) => cart);
  const [vacancies, setVacancies] = useState();
  const [slide, setSlide] = useState(0);

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
      <section id="vacancy">
        <div className="circle">
          <div className="filter"></div>
          <h1>{cart.language !== "uz" ? "Вакансия" : "Vakansiya"}</h1>
          <div className="wand"></div>
          <img src="/right.png" alt="image" />
        </div>
        <div className="about">
          <div className="container flex box">
            <img
              src="/vacancy.png"
              alt="image"
              style={{ objectFit: "cover" }}
            />
            <div className="info">
              <h2>
                {cart.language == "uz"
                  ? `Biz O'zbekistondagi eng yaxshi inson resurslari kompaniyasimiz`
                  : `Мы лучшая кадровая компания в Узбекистане`}
              </h2>
              <p>
                {cart.language == "uz"
                  ? `STA VISA agentligi xalqaro mehnat migratsiyasi sohasida uzoq
                yillardan buyon faoliyat yuritib kelayotgan inson resurslari
                agentligi bo'lib, o'zining ko'p yillik faoliyati va tajribasi
                tufayli nafaqat O'zbekistonda, balki Markaziy Osiyoda ham katta
                mavqega erishgan. STA VISA hamkorlik agentligining
                professionalligi va mijozlari faoliyatiga mas'uliyat bilan
                yondashishi ushbu agentlikni xalqaro mehnat migratsiyasi
                sohasidagi eng kuchli va ishonchli rekruting agentliklaridan
                biriga aylantirdi.`
                  : `Агентство STA VISA – кадровое агентство, которое много лет работает в сфере международной трудовой миграции, достигло отличного положения не только в Узбекистане, но и в Центральной Азии, благодаря своей многолетней деятельности и опыту и масштаб обслуживаемых клиентов. Профессионализм и ответственный подход Агентства международного сотрудничества STA VISA к деятельности своих клиентов сделали это агентство одним из самых сильных и надежных кадровых агентств в сфере международной трудовой миграции.`}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="buttons">
            <button
              onClick={() => {
                window.innerWidth > 1280
                  ? slide > 0
                    ? setSlide(slide - 1)
                    : setSlide(5)
                  : slide > 0
                  ? setSlide(slide - 1)
                  : setSlide(7);
              }}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
              onClick={() => {
                window.innerWidth > 1280
                  ? slide == 5
                    ? setSlide(0)
                    : setSlide(slide + 1)
                  : slide == 7
                  ? setSlide(0)
                  : setSlide(slide + 1);
              }}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="cards">
            {vacancies !== undefined
              ? vacancies.map((p, index) =>
                  index < 9 ? (
                    <div
                      className="card"
                      key={index}
                      style={{ transform: `translateX(-${slide * 315}px)` }}
                    >
                      <img
                        src={`${p.photo !== null ? p.photo : "/product1.png"}`}
                        alt="image"
                      />
                      <h3>{p.title}</h3>
                      <ul>
                        <li>{p.country}</li>
                        <li>{p.job}</li>
                        <li>{p.salary}</li>
                      </ul>
                      <div className="flex">
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
                    </div>
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
          <div className="button">
            <Link to={"/vacancies"}>
              {cart.language == "uz"
                ? `Hammasini ko'rish...`
                : `Посмотреть все...`}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vacancy;
