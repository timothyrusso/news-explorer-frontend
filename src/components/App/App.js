import './App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="content">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
