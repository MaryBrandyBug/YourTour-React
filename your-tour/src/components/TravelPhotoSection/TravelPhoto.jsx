import React from 'react';
import './TravelPhoto.css';
import '../../styles/CommonStyles/Sections/Sections.css';

import travelPh1 from './TravelPhotoPng/travelphoto-1.png';
import travelPh2 from './TravelPhotoPng/travel photo-2.png';
import travelPh3 from './TravelPhotoPng/travel photo-3.png';
import travelPh4 from './TravelPhotoPng/travel photo-4.png';
import travelPh5 from './TravelPhotoPng/travelphoto-5.png';
import travelPh6 from './TravelPhotoPng/travel photo-6.png';
import travelPh7 from './TravelPhotoPng/travelphoto-7.png';
import travelPh8 from './TravelPhotoPng/travelphoto-8.png';
import travelPh9 from './TravelPhotoPng/travelphoto-13.png';
import travelPh10 from './TravelPhotoPng/travelphoto-9.png';
import travelPh11 from './TravelPhotoPng/travelphoto-10.png';
import travelPh12 from './TravelPhotoPng/travelphoto-11.png';
import travelPh13 from './TravelPhotoPng/travelphoto-12.png';

export default function TravelPhoto() {
  return (
    <div className="travel-photo-section section">
      <div className="travel-photo-section__header section__header__flex">
        <h2 className="travel-photo-section__header__title section__header__title">Фотографии путешествий</h2>
        <p className="travel-photo-section__header__subtitle section__header__subtitle">Идейные соображения высшего порядка, а также рамки и место обучения кадров</p>
      </div>
      <div className="travel-photo-section__content section__content__flex">
        <div className="travel-photo-section__photo-container big">
          <img src={travelPh1} alt="travel memories" className="travel-photo-section__big-photo" />
          <img src={travelPh2} alt="travel memories" className="travel-photo-section__big-photo max-size" />
          <img src={travelPh3} alt="travel memories" className="travel-photo-section__big-photo max-middle-size" />
          <img src={travelPh4} alt="travel memories" className="travel-photo-section__big-photo" />
        </div>
        <div className="travel-photo-section__photo-container small">
          <img src={travelPh5} alt="travel memories" className="travel-photo-section__small-photo" />
          <img src={travelPh6} alt="travel memories" className="travel-photo-section__small-photo max-middle-size" />
          <img src={travelPh7} alt="travel memories" className="travel-photo-section__small-photo max-size" />
          <img src={travelPh8} alt="travel memories" className="travel-photo-section__small-photo" />
          <img src={travelPh9} alt="travel memories" className="travel-photo-section__small-photo" />
        </div>
        <div className="travel-photo-section__photo-container big">
          <img src={travelPh10} alt="travel memories" className="travel-photo-section__big-photo" />
          <img src={travelPh11} alt="travel memories" className="travel-photo-section__big-photo" />
          <img src={travelPh12} alt="travel memories" className="travel-photo-section__big-photo max-middle-size" />
          <img src={travelPh13} alt="travel memories" className="travel-photo-section__big-photo max-size" />
        </div>
      </div>
    </div>
  );
}
