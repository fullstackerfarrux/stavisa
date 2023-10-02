import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./banner.scss";

const TourismBanner = () => {
  const { cart } = useSelector((cart) => cart);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const tourismBanner = ["/tourismbanner.jpeg", "/tourismbanner2.jpeg"];

  return (
    <>
      <div id="banners" ref={emblaRef}>
        <div className="embla__container">
          {tourismBanner?.map((p, index) => (
            <a
              className="home"
              key={index}
              style={{
                backgroundImage: `url(${p})`,
              }}
              href={"/#tourism"}
            >
              <div className="blur">
                <div className="container">
                  <main className="main">
                    <div className="buttons">
                      <a href={`/#tourism`}>
                        <button className="more">
                          {cart.language == "uz" ? `Batafsil` : `Подробнее`}
                        </button>
                      </a>
                    </div>
                  </main>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default TourismBanner;
