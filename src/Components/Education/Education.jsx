import React from "react";
import "./education.scss";

const Education = () => {
  return (
    <>
      <section id="education">
        <h1>Образование</h1>
        <div className="about">
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
        <div className="container">
          <h2>Университеты</h2>
          <div className="university">
            <div className="child1">
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(/university1.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h4>LAndscape</h4>
                <p>High Altitude Landscapes</p>
              </div>
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(/university2.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h4>LAndscape</h4>
                <p>High Altitude Landscapes</p>
              </div>
            </div>
            <div className="child2">
              <div
                className="card_image2"
                style={{
                  backgroundImage: "url(./university3.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h4>LAndscape</h4>
                <p>High Altitude Landscapes</p>
              </div>
            </div>
            <div className="child1">
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(./university2.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h4>LAndscape</h4>
                <p>High Altitude Landscapes</p>
              </div>
              <div
                className="card_image"
                style={{
                  backgroundImage: "url(./university1.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h4>LAndscape</h4>
                <p>High Altitude Landscapes</p>
              </div>
            </div>
          </div>
          {/* <img src="./map.png" alt="image" className="map" /> */}
        </div>
      </section>
    </>
  );
};

export default Education;
