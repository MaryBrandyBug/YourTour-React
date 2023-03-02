import './styles/AppStyles/App.css';

import Header from './components/Header/Header';
import ChooseTour from './components/ChooseTourSection/ChooseTour/ChooseTour';
import Reviews from './components/ReviewsSection/Reviews/Reviews';
import TravelPhoto from './components/TravelPhotoSection/TravelPhoto';
import MailSection from './components/MailSection/MailSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ChooseTour />
      <Reviews />
      <TravelPhoto />
      <MailSection />
      <Footer />
    </div>
  );
}

export default App;
