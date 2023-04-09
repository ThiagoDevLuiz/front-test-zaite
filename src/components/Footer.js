import React from 'react';
import styled from 'styled-components';

import LogoP from '../assets/Images/zaiteLogoRodape.png';

const Footer = () => {
  return (
    <div>
      <Hr />
      <FooterContainer>
        <Newsletter>
          <p>
            Inscreva-se para se manter informado sobre as novidades e promoções
            da Zaite:
          </p>
          <Input type="email" placeholder="E-mail" />
          <ComandoReceber href="#">Receber NEWSLETTER</ComandoReceber>
        </Newsletter>
        <Location>
          <p>
            Zaite Tecnologia | Rua Jener de Souza 975, sala 103-Derby
            <br />
            Recife - PE CEP: 52.010-130 | CNPJ: 04.509.456/0001-32
            <br />
            Tel.: 81 3465.6540 | zaite@zaite.com.br
            <br />
          </p>
          <LogoFooter src={LogoP} />
        </Location>
      </FooterContainer>
    </div>
  );
};

export default Footer;

const Hr = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background-color: #6666663a;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  color: #606166fd;
`;

const Newsletter = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 17px;
`;

const Input = styled.input`
  width: 85%;
  padding: 5px;
  opacity: 0.5;
`;

const ComandoReceber = styled.a`
  color: #007832;
  font-weight: bold;
`;

const Location = styled.div`
  text-align: right;
  line-height: 25px;
`;

const LogoFooter = styled.img`
  padding-top: 20px;
`;
