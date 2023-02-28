import React from 'react';
import '../../../styles/CommonStyles/Sections/Sections.css';
import './ChooseTour.css';

import TourCard from '../TourCard/TourCard';

import tourImg1 from '../ChooseTourPng/cardTourPh-1.png';
import tourImg2 from '../ChooseTourPng/cardTourPh-2.png';
import tourImg3 from '../ChooseTourPng/cardTourPh-3.png';
import tourImg4 from '../ChooseTourPng/cardTourPh-5.png';
import tourImg5 from '../ChooseTourPng/cardTourPh-4.png';
import tourImg6 from '../ChooseTourPng/cardTourPh-6.png';

export default function ChooseTour() {
  return (
    <div className="choose-tour-section section">
      <div className="choose-tour-section__header section__header__flex">
        <h2 className="choose-tour-section__header__title section__header__title">Выбери свой тур</h2>
        <div className="choose-tour-section__header__menu">
          <div className="choose-tour-section_menu__item">
            <p className="choose-tour-section_menu__active-item">Популярные</p>
            <div className="choose-tour-section_menu__item-line" />
          </div>
          <div className="choose-tour-section_menu__item">
            <p className="choose-tour-section_menu__item-name">Авторские</p>
            <div className="choose-tour-section_menu__item-line" />
          </div>
          <div className="choose-tour-section_menu__item">
            <p className="choose-tour-section_menu__item-name">Походы</p>
            <div className="choose-tour-section_menu__item-line" />
          </div>
          <div className="choose-tour-section_menu__item">
            <p className="choose-tour-section_menu__item-name">Сплавы</p>
            <div className="choose-tour-section_menu__item-line" />
          </div>
          <div className="choose-tour-section_menu__item">
            <p className="choose-tour-section_menu__item-name">Велопрогулки</p>
            <div className="choose-tour-section_menu__item-line" />
          </div>
        </div>
      </div>

      <div className="choose-tour-section__content">
        <TourCard img={tourImg1} />
        <TourCard img={tourImg2} />
        <TourCard img={tourImg3} />
        <TourCard img={tourImg4} />
        <TourCard img={tourImg5} />
        <TourCard img={tourImg6} />
      </div>
    </div>
  );
}
