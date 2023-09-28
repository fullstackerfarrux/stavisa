import React from "react";
import "./tourism.scss";

const Tourism = () => {
  return (
    <>
      <section id="tourism">
        <div className="circle">
          <div className="filter"></div>
          <h1>Туризм</h1>
          <div className="wand"></div>
          <img src="/right.png" alt="image" />
        </div>
        <div className="about">
          <div className="container flex box">
            <div className="info">
              <h2>Huge 20% Savings on Maldives Hotels</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                porro nulla sequi accusamus, consequuntur nesciunt a quam
                provident officiis autem ducimus itaque sunt? Voluptatibus
                molestiae cum voluptates asperiores. Similique, quasi.
              </p>
            </div>
            <img src="/about_tourizm.png" alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="banner">
            <h2>Plan Your Tour With Our Travel Expert</h2>
            <h4>Our Professional Experts can craft your trip genuinely</h4>
          </div>
          <div className="circle">
            <div className="filter"></div>
            <h2 className="choice">Best Choices For You</h2>
            <div className="wand"></div>
          </div>
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
            <div className="card">
              <img src="/best1.png" alt="image" />
              <div className="info">
                <h2>Huge 20% Savings on Maldives Beaches</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  porro nulla sequi accusamus, consequuntur nesciunt a quam
                  provident officiis autem ducimus itaque sunt? Voluptatibus
                  molestiae cum voluptates asperiores. Similique, quasi.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/best1.png" alt="image" />
              <div className="info">
                <h2>Huge 20% Savings on Maldives Beaches</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  porro nulla sequi accusamus, consequuntur nesciunt a quam
                  provident officiis autem ducimus itaque sunt? Voluptatibus
                  molestiae cum voluptates asperiores. Similique, quasi.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="/best1.png" alt="image" />
              <div className="info">
                <h2>Huge 20% Savings on Maldives Beaches</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  porro nulla sequi accusamus, consequuntur nesciunt a quam
                  provident officiis autem ducimus itaque sunt? Voluptatibus
                  molestiae cum voluptates asperiores. Similique, quasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tourism;
