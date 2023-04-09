import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Texto from './components/Texto';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <Texto />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;