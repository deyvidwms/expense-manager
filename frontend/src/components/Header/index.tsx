import React, { useState } from 'react';
import Menu from './Menu';

import style from './Header.module.scss';

import logo from '../../assets/images/logo.svg';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu( !toggleMenu );
  }

  return (
    <div className={style.header}>
      
      <div className={style.logo}>
        <img src={logo} alt="Logo do projeto" />
      </div>

      <div className={style.userOptions} onClick={() => handleToggleMenu()}>
        <FaUserAlt />
        <p>ADMIN</p>
      </div>

      <Menu toggle={ toggleMenu ? 'on' : 'off' } />
    </div>
  );
}

export default Header;