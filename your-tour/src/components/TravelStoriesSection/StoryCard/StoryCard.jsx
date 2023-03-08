import React from 'react';
import DetailsBtn from '../../DetailsBtn/DetailsBtn';
import './StoryCard.css';

export default function StoryCard(props) {
  const { header } = props;
  const { text } = props;
  const { networks } = props;
  const { img } = props;
  const { list } = props;
  const { additionalClassCards } = props;

  const networksList = networks?.map((network) => <p className="travel-stories-section__social-network main-font-style">{network}</p>);
  const advantagesList = list?.map((item, i) => (i !== list.length - 1 ? <li className="travel-stories-section__content-block__list-item" key={new Date().getTime()}>{item}</li> : (
    <li className="travel-stories-section__content-block__list-item" key={new Date().getTime()}>
      {item}
      .
    </li>
  )));
  return (
    <div className={`travel-stories-section__content-block ${additionalClassCards}`}>
      <div className="travel-stories-section__content-block__footer">
        <DetailsBtn additionalClass="travel-stories-section__footer-details-link" />
        <div className="travel-stories-section__footer-social-networks">
          {networksList}
        </div>
      </div>
      <div className="travel-stories-section__content-block__content">
        <h3 className="travel-stories-section__content-block__title info-cards__header">{header}</h3>
        <p className="travel-stories-section__content-block__text main-font-style">{list ? `${text}:` : `${text}.`}</p>
        <ul className="travel-stories-section__content-block__list main-font-style">
          {advantagesList}
        </ul>
      </div>
      <img src={img} alt="" className="travel-stories-section__card__background" />
    </div>
  );
}
