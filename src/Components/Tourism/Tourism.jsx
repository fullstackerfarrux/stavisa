import React from "react";
import "./tourism.scss";

const Tourism = () => {
  return (
    <>
      <section id="tourism">
        <h1>Туризм</h1>
        <div className="container">
          <div className="about">
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
          <div className="banner">
            <h2>Plan Your Tour With Our Travel Expert</h2>
            <h4>Our Professional Experts can craft your trip genuinely</h4>
          </div>
          <h2 className="choice">Best Choices For You</h2>
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
