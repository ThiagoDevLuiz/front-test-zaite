import React from 'react';
import styled from 'styled-components';

const Texto = () => {
  return (
    <TextContainer>
      <TextZaite>
        Somos uma empresa especializada no desenvolvimento e manutenção de
        sistemas de informação para web, buscando sempre entregar aos nossos
        clientes um diferencial dentro de suas áreas de atuação. Há 21 anos
        atuando no mercado, prezamos sempre pela excelência no atendimento ao
        cliente e, pela atualização constante das soluções que oferecemos.
      </TextZaite>
    </TextContainer>
  );
};

export default Texto;

const TextContainer = styled.div`
  width: 85%;
  margin: 40px auto;
`

const TextZaite = styled.p`
  color: #6a6b70f5;
  text-align: center;
  font-size: 18px;
`