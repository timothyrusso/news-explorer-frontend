import './App.css';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  return (
    <div className="content">
      <Navigation />
      <Header />
      <Main />
    </div>
  );
}

export default App;
