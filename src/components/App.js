import '../styles/App.css';
import Banner from './adn_1_topPage/Banner'
import TopContent from './adn_1_topPage/TopContent'
import Contentbutton from './adn_2_middlePage/ContentButton'
import Categorybutton from './adn_2_middlePage/CategoryButton'
import MainContent from './adn_3_contentPage/MainContent'
import Footer from './adn_3_contentPage/Footer'



function App() {
  return (
    <div className="App">
      <Banner/>
      <TopContent/>
      <Contentbutton />
      <Categorybutton />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
