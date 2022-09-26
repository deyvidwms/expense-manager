import React, { useState } from 'react';
import Menu from './Menu';

import style from './Header.module.scss';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [aberto, setAberto] = useState(false);

  return (
    <div className={style.header}>
      
      <div className={style.logo}>
        <Logo />
      </div>

      <button 
        className={style.userOptions} 
        onClick={() => setAberto(!aberto)}
        // onBlur={() => setAberto(false)}
      >
        <FaUserAlt />
        <p>ADMIN</p>
      </button>

      <Menu aberto={aberto} setAberto={setAberto} />
    </div>
  );
}

export default Header;