import React from 'react';
import { Link } from 'react-router-dom';
import './MailSection.css';
import mailSectionPhoto from './MailSectionPng/footer photo.png';

export default function MailSection() {
  return (
    <div className="mail-section">
      <img src={mailSectionPhoto} alt="" className="mail-section__photo" />
      <div className="mail-section__content">
        <h3 className="mail-section__content__header">Пора в путешествие вместе с нами!</h3>
        <p className="mail-section__content__text main-font-style">
          Напиши на почту и узнай подробности на
          {' '}
          <Link to="mailto:yourtour@gmail.com" className="mail-section__content__mail">yourtour@gmail.com</Link>
        </p>
      </div>
    </div>
  );
}
