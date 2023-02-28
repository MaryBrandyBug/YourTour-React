import React from 'react';
import arrow from './DetailsBtnPng/Vector.png';

export default function DetailsBtn() {
  return (
    <div className="info-link__container">
      <p className="info-link__text">Подробнее</p>
      <div className="info-link__arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
