import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Texto from './components/Texto';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <Texto />
      </main>
    </div>
  );
}

export default App;