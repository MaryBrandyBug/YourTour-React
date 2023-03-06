import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('');
  const [yourTourForm, setYourTourForm] = useState({
    name: '', direction: '', email: '', phoneNumber: '', dateSince: '', dateUntil: '', comment: '',
  });

  function chengeRadio(e) {
    setRadio(e.target.value);
  }
  function chengeCheckbox() {
    setChecked(!checked);
  }

  const handleInput = (e) => {
    setYourTourForm({ ...yourTourForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // дальше методом POST передаем данные из стейтов на бэк
  };

  return (
    <div className="form-section section">
      <div className="form-section__header section__header__flex">
        <h2 className="form-section__header__title section__header__title">Собери свой тур</h2>
        <p className="form-section__header__subtitle section__header__subtitle main-font-style">
          Идейные соображения высшего порядка,
          <br />
          {' '}
          а также рамки и место обучения кадров
        </p>
      </div>

      <form onSubmit={handleSubmit} className="form-section__content-form section__content__flex">
        <div className="form-cont">
          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Имя</p>
              <input type="text" name="name" className="form-section__input-field main-font-style" placeholder="Введите Ваше имя" onChange={handleInput} />
            </div>
          </div>

          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Направление</p>
              <div className="select-wrapper">
                <select className="form-section__select-field main-font-style" name="direction" onChange={handleInput}>
                  <option value="default">Куда хотите ехать</option>
                  <option value="place">Едем сюда!</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Email</p>
              <input type="email" name="email" className="form-section__input-field main-font-style" placeholder="example@mail.com" onChange={handleInput} />
            </div>
          </div>

          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Телефон</p>
              <input type="tel" name="phoneNumber" className="form-section__input-field main-font-style" maxLength="11" placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _" onChange={handleInput} />
            </div>
          </div>

          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Дата от</p>
              <input type="date" name="dateSince" className="form-section__input-field main-font-style" onChange={handleInput} />
            </div>
          </div>

          <div className="form-section__input-fields-container">
            <div className="form-section__input-field-container">
              <p className="form-section__input-name main-font-style">Дата до</p>
              <input type="date" name="dateUntil" className="form-section__input-field main-font-style" onChange={handleInput} />
            </div>
          </div>
        </div>

        <div className="form-section__input-comment-container">
          <p className="form-section__input-name main-font-style">Комментарий</p>
          <textarea name="comment" className="form-section__input-field-comment input-comment" onChange={handleInput} />
        </div>
        <div className="form-section__age-check">
          <div className="form-section__age-check__input-container">
            <p className="form-section__input-name main-font-style">Вам есть 18 лет?</p>
            <div className="age-check__radio-buttons-container">
              <label className="age-check__radio-button-container" htmlFor="ageCheckTrue">
                <input type="radio" name="age" value="yes" className="age-check__radio-button" id="ageCheckTrue" onChange={chengeRadio} checked={radio === 'yes'} />
                <span className="radio__border" />
                <p className="form-section__input-name main-font-style">Да</p>
              </label>
              <label className="age-check__radio-button-container" htmlFor="ageCheckFalse">
                <input type="radio" name="age" value="no" className="age-check__radio-button" id="ageCheckFalse" onChange={chengeRadio} checked={radio === 'no'} />
                <span className="radio__border" />
                <p className="form-section__input-name main-font-style">Нет</p>
              </label>
            </div>
          </div>
        </div>
        <div className="form-section__agreement-container">
          <label className="form-section__accept" htmlFor="accept">
            <input type="checkbox" name="agreement" className="form-section__agreement-radio-button" id="accept" onChange={chengeCheckbox} />
            <span className="checkbox__border" />
            <div className="agreement-text">
              Нажимая кнопку, я принимаю условия
              {' '}
              <a href="#" className="form-section__agreement-text-link">Лицензионного договора</a>
            </div>
          </label>
        </div>
        <div className="form-section__buttons-container">
          <div className="form-section__submit-button">
            <button type="submit" className="form-section__submit-button-text main-font-style">Найти тур</button>
          </div>
          <div className="form-section__reset-button">
            <button type="button" className="form-section__reset-button-text main-font-style">Сбросить</button>
          </div>
        </div>

      </form>
    </div>
  );
}
