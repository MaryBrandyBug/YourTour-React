import React from 'react';
import './ReviewCard.css';

export default function ReviewCard(props) {
  const { text } = props;
  const { name } = props;
  const { tour } = props;
  const { textSecondPart } = props;
  const { img } = props;
  return (
    <div className="review-section__review-card">
      <p className="review-section__review-card-text">
        {text}
        {textSecondPart
          ? (
            <>
              <br />
              <br />
              {textSecondPart}
            </>
          )
          : ''}
      </p>
      <div className="review-section__review-card__footer">
        <div className="review-section__footer-content">
          <h3 className="review-section__reviewer-name">{name}</h3>
          <p className="review-section__reviewer-tour">
            Тур:
            {' '}
            {tour}
          </p>
        </div>
        <img src={img} alt="reviewer" className="footer-content__reviewer" />
      </div>
    </div>
  );
}
