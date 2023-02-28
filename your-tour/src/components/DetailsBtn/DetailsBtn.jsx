import React from 'react';
import './DetailsBtn.css';
import arrow from './DetailsBtnPng/Vector.png';

export default function DetailsBtn(additionalClass) {
  return (
    <div className={`info-link__container ${additionalClass}`}>
      <p className="info-link__text">Подробнее</p>
      <div className="info-link__arrow">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
