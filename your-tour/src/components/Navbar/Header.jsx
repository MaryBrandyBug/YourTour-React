import React from 'react';
import '../../styles/ComponentsStyles/HeaderStyles/Header.css';
import YourTourLogo from '../../styles/ComponentsStyles/HeaderStyles/HeaderPNG/YourTour.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__navbar">
        <div className="navbar">
          <div className="navbar__logo">
            <img src={YourTourLogo} alt="logo" className="YourTourLogo" />

          </div>
          <div className="navbar__menu">
            <p className="menu__item main-font-style">Туры</p>
            <p className="menu__item main-font-style">Создать тур</p>
            <p className="menu__item main-font-style">Отзывы</p>
            <p className="menu__item main-font-style">Истории</p>
          </div>
          <p className="telephone main-font-style">+7 999 999 99 99</p>
        </div>
      </div>
      <div className="header__content">
        <h1 className="header__content__title">Идеальные путешествия существуют</h1>
        <p className="header__content__subtitle main-font-style">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
        <div className="header__content__button">
          <p className="find-tour-btn">Найти тур</p>
        </div>
      </div>
    </header>
  );
}
