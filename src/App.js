import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Header from './components/Header';
import News from './components/News';
import Footer from './components/Footer';
// import Api from './services/Api';
// import { useEffect } from 'react';
// import axios from 'axios';

function App() {
  // const getToken = async () => {
  //   const response = await axios.post("http://zaite.com.br/test/api/v1/auth", {
  //     username: 'admin',
  //     password: '12345',
  //   });
  //   console.log(response)
  // };

  // useEffect(() => {
  //   getToken()
  // },[])

  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <TextContainer>
          <TextZaite>
            Somos uma empresa especializada no desenvolvimento e manutenção de
            sistemas de informação para web, buscando sempre entregar aos nossos
            clientes um diferencial dentro de suas áreas de atuação. Há 21 anos
            atuando no mercado, prezamos sempre pela excelência no atendimento
            ao cliente e, pela atualização constante das soluções que
            oferecemos.
          </TextZaite>
        </TextContainer>
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;

const TextContainer = styled.div`
  width: 85%;
  margin: 40px auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextZaite = styled.p`
  color: #6a6b70f5;
  text-align: center;
  font-size: 20px;
`;
