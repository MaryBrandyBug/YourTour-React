import React from 'react';
import './MailSection.css';
import mailSectionPhoto from './Mail-Section-Png/footer photo.png';

export default function MailSection() {
  return (
    <div className="mail-section">
      <img src={mailSectionPhoto} alt="" className="mail-section__photo" />
      <div className="mail-section__content">
        <h3 className="mail-section__content__header">Пора в путешествие вместе с нами!</h3>
        <p className="mail-section__content__text main-font-style">
          Напиши на почту и узнай подробности на
          {' '}
          <a href="#/" className="mail-section__content__mail">yourtour@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
