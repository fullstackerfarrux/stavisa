import React, { useEffect, useState } from "react";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../rt/slices/user";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((cart) => cart);
  localStorage.setItem("user", JSON.stringify(cart));
  const [language, setLanguage] = useState();
  const [scroll, setScroll] = useState();
  const [dropdown, setDropdown] = useState();

  let handleChange = (e) => {
    let language = e.target.value;

    dispatch(changeLanguage({ language }));
    localStorage.setItem("user", JSON.stringify(cart));
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScroll(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!dropdown ? (
        <div
          className="header"
          style={
            scroll > 55
              ? {
                  position: "sticky",
                  backgroundColor: "#fff",
                  boxShadow: "-2px 9px 15px 5px rgba(34, 60, 80, 0.33)",
                }
              : window.location.pathname !== "/"
              ? {
                  position: "sticky",
                  backgroundColor: "#fff",
                  boxShadow: "-2px 9px 15px 5px rgba(34, 60, 80, 0.33)",
                }
              : {
                  position: "absolute",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }
          }
        >
          <div className="container">
            <main>
              <Link to={"/"}>
                <img src="/logo1.png" alt="logo" className="logo" />
              </Link>
              <div className="flex">
                <ul
                  style={
                    scroll > 55
                      ? { color: "black" }
                      : window.location.pathname !== "/"
                      ? { color: "black" }
                      : { color: "white" }
                  }
                >
                  <li className="li">
                    <a href="/#vacancy">Вакансия</a>
                  </li>
                  <li className="li">
                    <a href="/#tourism">Туризм</a>
                  </li>
                  <li className="li">
                    <a href="/#education">Образование</a>
                  </li>
                  <li className="li">О нас </li>
                </ul>
                <form>
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
                    style={
                      scroll > 55
                        ? { color: "black" }
                        : window.location.pathname !== "/"
                        ? { color: "black" }
                        : { color: "white", backgroundColor: "transparent" }
                    }
                  >
                    <option value="uz" selected={cart?.language == "uz"}>
                      Uz
                    </option>
                    <option value="ru" selected={cart?.language == "ru"}>
                      Ru
                    </option>
                  </select>
                </form>
              </div>
              <div className="dropdown">
                <label htmlFor="drop1" onClick={() => setDropdown(true)}>
                  <i class="fa-solid fa-bars-staggered fa-rotate-180"></i>
                </label>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div
          className="mobileheader"
          style={dropdown ? { display: "block" } : { display: "none" }}
        >
          <div className="container">
            <div className="exit" onClick={() => setDropdown(false)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <main>
              <Link to={"/"}>
                <img src="/logo1.png" alt="logo" className="logo" />
              </Link>
              <div className="wand"></div>
              <div className="flex">
                <ul>
                  <li className="li" onClick={() => setDropdown(false)}>
                    <a href="/#vacancy">Вакансия</a>
                  </li>
                  <li className="li" onClick={() => setDropdown(false)}>
                    <a href="/#tourism">Туризм</a>
                  </li>
                  <li className="li" onClick={() => setDropdown(false)}>
                    <a href="/#education">Образование</a>
                  </li>
                  <li className="li">О нас </li>
                </ul>
              </div>
              <form>
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
                    Uz
                  </option>
                  <option value="ru" selected={cart?.language == "ru"}>
                    Ru
                  </option>
                </select>
              </form>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
