import React from 'react';
import '../../../styles/CommonStyles/Sections/Sections.css';
import './TravelStories.css';

import StoryCard from '../StoryCard/StoryCard';

import story1 from '../TravelStoriesPng/story1.png';
import story2 from '../TravelStoriesPng/story2.png';
import story3 from '../TravelStoriesPng/story3.png';

export default function TravelStories() {
  const inst = 'instagram';
  const facebook = 'facebook';
  const youTube = 'YouTube';
  const vk = 'ВКонтакте';
  const storyHeader = 'Автостопом в Стамбул';
  const storyText = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений';
  const advantagesList = ['вкусная еда', 'дешевый транспорт', 'красивый город'];
  return (
    <div className="travel-stories-section section">
      <div className="travel-stories-section__header section__header__flex">
        <h2 className="travel-stories-section__header__title section__header__title">Истории путешествий</h2>
        <p className="travel-stories-section__header__subtitle section__header__subtitle">
          Идейные соображения высшего порядка, а
          {' '}
          <br />
          также рамки и место обучения кадров
        </p>
      </div>
      <div className="travel-stories-section__content section__content__flex">
        <StoryCard networks={[inst, facebook, youTube]} header={storyHeader} text={storyText} img={story1} list={advantagesList} additionalClass="first-story-card" />
        <StoryCard networks={[inst, vk]} header={storyHeader} text={storyText} img={story2} additionalClass="second-story-card" />
        <StoryCard networks={[inst, facebook, vk]} header={storyHeader} text={storyText} img={story3} additionalClass="third-story-card" />
      </div>
    </div>
  );
}
