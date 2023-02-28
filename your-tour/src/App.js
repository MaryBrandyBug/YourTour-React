import './styles/AppStyles/App.css';

import Header from './components/Header/Header';
import ChooseTour from './components/ChooseTourSection/ChooseTour/ChooseTour';
import MailSection from './components/Mail-Section/MailSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ChooseTour />
      <MailSection />
      <Footer />
    </div>
  );
}

export default App;
