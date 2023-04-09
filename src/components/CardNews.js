import React from 'react';
import styled from 'styled-components';

import ImgNews from '../assets/Images/noticia.jpg';

const CardNews = props => {
  return (
    <ContainerCard>
      <Foto src={ImgNews} alt="Imagem notícia" width="100%" />
      <Data>{props.data}</Data>
      <Descricao>
        Alta demanda por programadores em diversas áreas como front-end e
        back-end, especialmente para habilidades em JavaScript, React, PHP.
      </Descricao>
    </ContainerCard>
  );
};

export default CardNews;

const ContainerCard = styled.div`
  width: 30%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  
  :hover {
    background-color: #d7d7d744;
    border-radius: 7px;
  }
`;

const Foto = styled.img`
  border-radius: 7px;
`;

const Data = styled.h3`
  color: #007832;
  margin: 3px 0 10px 0;
`;

const Descricao = styled.p`
  color: #4a4b4ee1;
  text-align: left;
`;
