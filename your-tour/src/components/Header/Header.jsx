import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';
import YourTourLogo from './HeaderPNG/YourTour.png';

export default function Header() {
  const menuItems = [{ item: 'Туры', id: 'chooseTour' }, { item: 'Создать тур', id: 'createTour' }, { item: 'Отзывы', id: 'reviews' }, { item: 'Истории', id: 'travelStories' }];
  const menu = menuItems.map((i) => <Link to={`#${i.id}`} style={{ textDecoration: 'none' }}><p className="menu__item main-font-style">{i.item}</p></Link>);
  return (
    <header className="header">
      <div className="header__navbar">
        <div className="navbar">
          <div className="navbar__logo">
            <img src={YourTourLogo} alt="logo" className="YourTourLogo" />

          </div>
          <div className="navbar__menu">
            {menu}
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
