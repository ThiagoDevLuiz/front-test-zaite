import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Texto from './components/Texto';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <Texto />
        <News />
      </main>
    </div>
  );
}

export default App;