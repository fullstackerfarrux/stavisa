import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./vacancies.scss";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";

const Vacancies = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((cart) => cart);
  const [vacancies, setVacancies] = useState();

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

      <div id="vacancies" className="container">
        <div className="cards">
          {vacancies?.map((p, index) => (
            <div className="card" key={index}>
              <img
                src={`${p.photo !== null ? p.photo : "/product1.png"}`}
                alt="image"
              />
              <main>
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
              </main>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vacancies;
