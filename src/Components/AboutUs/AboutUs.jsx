import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import "./aboutus.scss";

const AboutUs = () => {
  const { cart } = useSelector((cart) => cart);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const slider = [
    "client1.jpg",
    "clients2.mp4",
    "clients4.jpg",
    "clients3.mp4",
  ];

  const partners = ["flag1.png", "flag2.png", "flag3.png", "flag4.png"];

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <div id="aboutus">
        <div className="box container">
          <h1>
            {cart.language == "uz"
              ? `Natijalarimiz raqamlarda`
              : `Наши результаты в цифрах`}
          </h1>
          <div className="flex">
            <div className="registered">
              <i
                className="fa-solid fa-address-card"
                style={{ color: "#002952" }}
              ></i>
              <p>4645 +</p>
              <h3>
                {cart.language == "uz"
                  ? `Ro'xatga olingan`
                  : `Зарегистрированный`}
              </h3>
            </div>
            <div className="visa">
              <i
                class="fa-solid fa-id-card-clip"
                style={{ color: "#B71414" }}
              ></i>
              <p>2157 +</p>
              <h3>{cart.language == "uz" ? `Visa` : `Виза`}</h3>
            </div>
          </div>
          <div className="flex">
            <div className="work">
              <i
                className="fa-solid fa-earth-americas"
                style={{ color: "#002952" }}
              ></i>
              <p>412 +</p>
              <h3>{cart.language == "uz" ? `Vakansiya` : `Вакансии`}</h3>
            </div>
            <div className="partner">
              <i
                className="fa-solid fa-handshake-simple"
                style={{ color: "#B71414" }}
              ></i>
              <p>460 +</p>
              <h3>{cart.language == "uz" ? `Hamkorlar` : `Партнеры`}</h3>
            </div>
          </div>
        </div>

        <div className="clients container">
          <h2>{cart.language == "uz" ? "Mijozlar" : "Клиенты"}</h2>
          <div className="embla">
            <div className="embla__viewport" ref={emblaMainRef}>
              <div className="embla__container">
                {slider.map((index) => (
                  <div className="embla__slide" key={index}>
                    {index.includes("mp4") ? (
                      <video
                        className="embla__slide__video"
                        controls
                        poster={index}
                      >
                        <source src={index} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        className="embla__slide__img"
                        src={index}
                        alt="Your alt text"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="embla-thumbs">
              <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
                <div className="embla-thumbs__container">
                  {slider?.map((p, index) => (
                    <div
                      className={"embla-thumbs__slide".concat(
                        index == selectedIndex
                          ? " embla-thumbs__slide--selected"
                          : ""
                      )}
                    >
                      {console.log(index, selectedIndex)}
                      <button
                        onClick={() => onThumbClick(index)}
                        className="embla-thumbs__slide__button"
                        type="button"
                      >
                        {p.includes("mp4") ? (
                          <video
                            className="embla-thumbs__slide__img"
                            controls
                            poster={p}
                          >
                            <source src={p} type="video/mp4" />
                          </video>
                        ) : (
                          <img
                            className="embla-thumbs__slide__img"
                            src={p}
                            alt="Your alt text"
                          />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners container">
          <h1>{cart.language == "uz" ? `Hamkorlar` : `Партнеры`} </h1>
          <div className="flex">
            <img src="flag1.png" alt="img" />
            <img src="flag2.png" alt="img" style={{ marginLeft: 10 }} />
          </div>
          <div className="flex">
            <img src="flag3.png" alt="img" />
            <img src="flag4.png" alt="img" style={{ marginLeft: 10 }} />
          </div>
          <img src="flag5.png" alt="" className="europe" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
