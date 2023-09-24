import React, { useState } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../rt/slices/user";

const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((cart) => cart);
  localStorage.setItem("user", JSON.stringify(cart));
  const [language, setLanguage] = useState();

  let handleChange = (e) => {
    let language = e.target.value;

    dispatch(changeLanguage({ language }));
    localStorage.setItem("user", JSON.stringify(cart));
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <main>
            <img src="/logo.png" alt="logo" className="logo" />
            <div className="flex">
              <ul>
                <li>
                  <a href="/#vacancy">Вакансия</a>
                </li>
                <li>
                  <a href="/#tourism">Туризм</a>
                </li>
                <li>
                  <a href="/#education">Образование</a>
                </li>
                <li>О нас </li>
              </ul>
              <form>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search" />
                {cart?.language == "ru" ? (
                  <img
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"
                  />
                ) : (
                  <img
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg"
                  />
                )}
                <select
                  name="language"
                  id="language"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="uz" selected={cart?.language == "uz"}>
                    Uzb
                  </option>
                  <option value="ru" selected={cart?.language == "ru"}>
                    Russian
                  </option>
                </select>
              </form>
            </div>
            <div className="dropdown">
              <label htmlFor="drop1">
                <i className="fa-solid fa-bars"></i>
              </label>
              <input type="checkbox" id="drop1" hidden />

              <div className="dropdown-menu">
                <ul>
                  <a href="/#vacancy">
                    <li>Вакансия</li>
                  </a>
                  <a href="#tourism">
                    <li>Туризм</li>
                  </a>
                  <a href="/#education">
                    <li>Образование</li>
                  </a>
                  <li>О нас </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Header;
