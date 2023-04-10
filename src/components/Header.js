/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../assets/Images/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <a href="#">
            <img src={Logo} alt="Logo Zaite" width="200px" />
          </a>
        </LogoContainer>
        <HamburgerMenu onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </HamburgerMenu>
        <Nav isMenuOpen={isMenuOpen}>
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

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 20px;
  }
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: ${({ isMenuOpen }) => (isMenuOpen ? 'auto' : 0)};
      overflow: hidden;
      transition: height 0.3s ease-in-out;
    }
  }

  li {
    margin-right: 20px;
    transition: transform 0.4s;

    @media (max-width: 768px) {
      margin: 10px 0;
    }
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

  @media (max-width: 768px) {
    position: relative;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 25px;
    cursor: pointer;

    svg {
      color: #007832;
    }
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