import './App.css';
import CardSection from './Components/CardSection/cards.jsx';
import Client from './Components/Client/client.jsx';
import Footer from './Components/Footer/footer.jsx';
import Fourth from './Components/FourthSection/fourth.jsx';
import Header from "./Components/Header/header.jsx";
import HeroSection from './Components/HeroSection/herosection.jsx';
import Port from './Components/Portfolio/portfolio.jsx';
import SocialMediaSection from './Components/SocialMediaSection/social.jsx';
import Survay from './Components/Survay/survay.jsx';

function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <SocialMediaSection />
    <CardSection />
    <Fourth />
    <Port />
    <Survay />
    <Client />
    <Footer />
    </>
  );
}

export default App;
