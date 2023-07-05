import React, { useEffect, useState, useRef } from "react";
import "../assets/css/Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeOutRef = useRef(null);

  useEffect(() => {
    const slideRight = () => {
      setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
    };

    timeOutRef.current = autoPlay && setTimeout(slideRight, 2500);

    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, [current, autoPlay, images]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOutRef.current);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${index === current ? "carousel_card-active" : ""}`}
          >
            <img className="card_image" src={image.image} alt="" />
          </div>
        ))}

        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${index === current ? "pagination_dot-active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
