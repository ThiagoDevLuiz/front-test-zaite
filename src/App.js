import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
      </main>
    </div>
  );
}

export default App;