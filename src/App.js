import './App.css';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Header from './components/Header';
import News from './components/News';
import Footer from './components/Footer';
import Api from './services/Api';
import { useEffect } from 'react';
import { useState } from 'react';
import ClientsList from './components/ClientsList';

function App() {
  const [clients, setClients] = useState([]);

  const getToken = async () => {
    const response = await Api.post('/auth', {
      username: 'admin',
      password: '12345',
    });
    return response.data.access_token;
  };

  const getData = async token => {
    const response = await Api.get('/clients', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return response.data;
  };

  const initApp = async () => {
    const token = await getToken();
    const data = await getData(token);
    setClients(data);
  };

  // Toda lógica de pegar a lista de clientes foi implementada porém continuo recebendo Access-Control-Allow-Origin
  // Para utilizar a api só é necessário descomentar o useEffect abaixo

  // useEffect(() => {
  //   initApp()
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
        <ClientsList clients={clients} />
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
