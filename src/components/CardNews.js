import React from 'react';
import styled from 'styled-components';

const CardNews = props => {
  return (
    <ContainerCard>
      <Photo src={props.image} alt="Imagem notícia" />
      <Date>{props.date}</Date>
      <Description>{props.desc}</Description>
    </ContainerCard>
  );
};

export default CardNews;

const ContainerCard = styled.div`
  width: 30%;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    background-color: #d7d7d752;
    border-radius: 7px;
  }
`;

const Photo = styled.img`
  border-radius: 7px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Date = styled.h3`
  color: #007832;
  margin: 3px 0 10px 5px;
`;

const Description = styled.p`
  color: #4a4b4ee1;
  text-align: left;
  margin: 0 0 5px 5px;
`;