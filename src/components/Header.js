/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/Images/logo1.png';

const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <a href="#">
            <img src={Logo} alt="Logo Zaite" width="200px" />
          </a>
        </LogoContainer>
        <Nav>
          <ul>
            <li><a href="#">A Empresa</a></li>
            <li><a href="#">Soluções</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Parceiros</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
        </Nav>
      </HeaderContainer>
      <Hr />
    </div>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-right: 20px;
    transition: transform 0.4s;
  }

  li:hover {
    transform: scale(1.05);
  }

  a {
    color: #9295a1;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    font-weight: bold;
    font-size: larger;
  }

  a:hover {
    color: #007832;
  }
`;

const Hr = styled.hr`
  width: 100%;
  margin: auto;
  position: absolute;
  border: none;
  height: 1px;
  left: 0;
  background-color: #6666663a;
`;