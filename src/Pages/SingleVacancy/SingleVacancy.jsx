import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./SingleVacancy.scss";

const SingleVacancy = () => {
  const { cart } = useSelector((cart) => cart);
  const [vacancy, setVacancy] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function get() {
      await fetch(`https://admin.staviza.uz/api/vacancy/${id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setVacancy(data));
    }

    get();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, tel_number, email, passport } = e.target;
    console.log(passport.files[0]);
    await fetch("https://admin.staviza.uz/api/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vacancy: id,
        name: name.value,
        phone: tel_number.value,
        mail: email.value,
        passport: null,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Header />

      <div id="vacancyid" className="container">
        <img
          src={`${vacancy?.photo !== null ? vacancy?.photo : "/product1.png"}`}
          alt="image"
        />
        <div className="about">
          <h2>{vacancy?.title}</h2>
          <h4>
            <i className="fa-solid fa-location-dot"></i>
            {vacancy?.country}
          </h4>
          <h4>
            <i className="fa-solid fa-person-digging"></i>
            {vacancy?.job}
          </h4>
          <h4>
            <i className="fa-solid fa-hand-holding-dollar"></i>
            {vacancy?.salary}
          </h4>
          <div className="description">
            <ul>
              {cart?.language == "uz"
                ? vacancy?.description.uz.split("\n").map((line, index) => (
                    <li key={index}>
                      {line}
                      <br />
                    </li>
                  ))
                : vacancy?.description.ru.split("\n").map((line, index) => (
                    <li key={index}>
                      {line}
                      <br />
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>

      <div id="request" className="container">
        <img src="/sign.png" alt="" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>
            {cart.language == "uz" ? `Ariza topshirish` : `Оставить заявку`}
          </h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={cart.language == "uz" ? `Ism` : `Имя`}
            required
          />
          <input
            type="text"
            name="tel_number"
            id="tel_number"
            placeholder={
              cart.language == "uz" ? `Telefon raqam` : `Номер телефона`
            }
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder={cart.language == "uz" ? `Email` : `Email`}
            required
          />
          <label htmlFor="passport">Отправьте пасспорт</label>
          <input type="file" name="passport" id="passport" required />
          <button type="submit">
            {cart.language == "uz" ? `Yuborish` : `Отправить`}
          </button>
        </form>
      </div>
    </>
  );
};

export default SingleVacancy;
