import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Header from "../../Components/Header/Header";
import "./home.scss";
import Main from "../../Components/Main/Main";
import { Link } from "react-router-dom";

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [slider, setSlider] = useState(0);
  let test = ["/header.png", "/turizm.png", "/vakansiya.jpg"];

  useCallback(() => {
    console.log(window.scrollY);
  }, [window.scrollY]);

  return (
    <>
      <Header />

      <div className="home" ref={emblaRef}>
        <div className="embla__container">
          {test?.map((p, index) => (
            <div
              className="home"
              key={index}
              style={{
                backgroundImage: `url(${p})`,
              }}
            >
              <div className="container">
                <main className="main" onClick={() => setSlider(slider + 1)}>
                  <h1>
                    Lets Begin To{" "}
                    {index == 0
                      ? "Turizm"
                      : index == 1
                      ? "Ta'lim"
                      : "VaKansiya"}{" "}
                    The World And Love
                  </h1>
                  <p>
                    Thinking of Taking a break from busy Life? Planning to go
                    out of the country with you loved ones to spend some quality
                    time?
                  </p>
                  {index == 0 ? (
                    ""
                  ) : index == 1 ? (
                    ""
                  ) : (
                    <Link to={"/vacansies"}>
                      <button>Lets go</button>
                    </Link>
                  )}
                </main>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Main />
    </>
  );
};

export default Home;
