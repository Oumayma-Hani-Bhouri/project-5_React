import React, { useState } from "react";
import "../Carrousel/Carrousel.scss";
import ArrowLeft from "../../assets/images/ArrowLeft.svg";
import ArrowRight from "../../assets/images/ArrowRight.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      {images.length > 1 && (
        <div className="carousel__controls">
          <img
            alt="fleche gauche"
            src={ArrowLeft}
            onClick={goToPrevious}
            className="carousel__button carousel__button--left"
          />

          <img
            alt="fleche droite"
            src={ArrowRight}
            onClick={goToNext}
            className="carousel__button carousel__button--right"
          />

          <div className="carousel__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
      <div className="carousel__slide">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel__image"
        />
      </div>
    </div>
  );
};

export default Carousel;
