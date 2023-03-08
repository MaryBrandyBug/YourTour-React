/* eslint-disable max-len */
import React from 'react';
import './Reviews.css';
import '../../../styles/CommonStyles/Sections/Sections.css';

import ReviewCard from '../ReviewCard/ReviewCard';
import reviewer1 from '../ReviewsPng/reviewer1.png';
import reviewer2 from '../ReviewsPng/reviewer2.png';

export default function Reviews() {
  const reviewText1 = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.';
  const reviewText2 = 'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.';
  const reviewText3 = 'Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие вформировании новых предложений. Повседневная практика показывает, что реализациянамеченных плановых заданий в значительной степениобуславливает создание модели развития.';
  const reviewerName1 = 'Мария';
  const reviewerName2 = 'Павел';
  const tourName1 = 'Вдали от дома';
  const tourName2 = 'Путешествие в горы';
  return (
    <div className="review-section section" id="reviews">
      <div className="review-section__header section__header__flex">
        <h2 className="review-section__header__title section__header__title">Отзывы наших путешественников</h2>
        <p className="review-section__header__subtitle section__header__subtitle">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className="review-section__content">
        <ReviewCard text={reviewText1} name={reviewerName1} tour={tourName1} img={reviewer1} />
        <ReviewCard text={reviewText2} textSecondPart={reviewText3} name={reviewerName2} tour={tourName2} img={reviewer2} />
      </div>
    </div>
  );
}
