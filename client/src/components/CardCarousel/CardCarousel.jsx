import { useState, useEffect } from 'react';
import axios from 'axios';
import './CardCarousel.css';
import './CarouselResponsive.css'

function CardCarousel({img,title,text}) {

  return (
    <div className="carousel-option">
      <div className="card-carousel">
          <img src={img}></img>
          <h5>{title}</h5>
          <p>{text}</p>
      </div>
    </div>
  );
}

export default CardCarousel;
