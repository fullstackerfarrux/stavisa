import React, { useEffect, useState } from "react";
import "./vacancy.scss";
import { useDispatch, useSelector } from "react-redux";
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
          <h1>Вакансия</h1>
          <div className="wand"></div>
          <img src="/right.png" alt="image" />
        </div>
        <div className="about">
          <div className="container flex box">
            <img src="/about_tourizm.png" alt="image" />
            <div className="info">
              <h2>Huge 20% Savings on Maldives Hotels</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                porro nulla sequi accusamus, consequuntur nesciunt a quam
                provident officiis autem ducimus itaque sunt? Voluptatibus
                molestiae cum voluptates asperiores. Similique, quasi.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="buttons">
            <button
              onClick={() => {
                slide > 0 ? setSlide(slide - 1) : setSlide(5);
              }}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button
              onClick={() => {
                slide == 5 ? setSlide(0) : setSlide(slide + 1);
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
                      style={{ transform: `translateX(-${slide * 330}px)` }}
                    >
                      <img
                        src={`${p.photo !== null ? p.photo : "/product1.png"}`}
                        alt="image"
                      />
                      <h3>{p.title}</h3>
                      <p>3Days 4Nights</p>
                      <div className="flex">
                        <div>
                          <i className="fa-solid fa-plane fa-rotate-270"></i>
                          <p>2 Flights</p>
                        </div>
                        <div>
                          <i className="fa-solid fa-hotel"></i>
                          <p>Hotel</p>
                        </div>
                        <div>
                          <i className="fa-solid fa-car-side"></i>
                          <p>3 Transfers</p>
                        </div>
                        <div>
                          <i className="fa-solid fa-person-snowboarding fa-rotate-270"></i>
                          <p>2 Activities</p>
                        </div>
                      </div>
                      <ul>
                        <li>. Tour Combo With Air Transport </li>
                        <li>. Ice Ski Activity and Guide</li>
                        <li>. Return Tickets</li>
                      </ul>
                      <div className="flex">
                        <Link to={`/vacancy/${p.id}`}>
                          <button className="more">Batafsil</button>
                        </Link>
                        <button className="sign">Ro'yxatdan o'tish</button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )
                )
              : ""}
          </div>
          <Link to={"/vacancies"} className="button">
            More about ...
          </Link>
        </div>
      </section>
    </>
  );
};

export default Vacancy;
