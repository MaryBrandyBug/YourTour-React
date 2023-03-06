import React from 'react';
import './TourCard.css';
import '../../../styles/CommonStyles/Sections/Sections.css';
import DetailsBtn from '../../DetailsBtn/DetailsBtn';

export default function TourCard(cardImg) {
  const { img } = cardImg;

  return (
    <div className="choose-tour__card">
      <div className="choose-tour__card-content">
        <div className="choose-tour__text-container">
          <h3 className="choose-tour__card__title info-cards__header">Путешествие в горы</h3>
          <p className="choose-tour__card__subtitle main-font-style">от 80 000 руб</p>
        </div>
        <DetailsBtn additionalClass="choose-tour__link" />
      </div>
      <img src={img} className="choose-tour__card__background" alt="tour cover" />
    </div>
  );
}
