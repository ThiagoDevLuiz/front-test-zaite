/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Header.module.css'

import Logo from '../../assets/Images/logo1.png'
 
const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#">
            <img src={Logo} alt="Logo Zaite" width="200px"/>
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">A Empresa</a></li>
            <li><a href="#">Soluções</a></li>
            <li><a href="#">Equipe</a></li>
            <li><a href="#">Notícias</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Parceiros</a></li>
            <li><a href="#">Eventos</a></li>
          </ul>
        </nav>
      </header>    
      <hr className={styles.hr}/>
    </div>
  )
}

export default Header