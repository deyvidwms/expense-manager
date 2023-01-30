import React, { useEffect, useState } from 'react';
import Menu from './Menu';

import style from './Header.module.scss';

import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { FaBars, FaTimes, FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect( () => {

    const verifyWidthScreen = () => {
      const width = window.innerWidth;

      if ( width <= 500 ) {
        setMenuMobile(true);
      } else {
        setMenuMobile(false);
      }

    }

    verifyWidthScreen();

    window.addEventListener('resize', verifyWidthScreen);

  }, []);

  return (
    <div className={style.header}>
      
      <div className={style.logo}>
        <Logo />
      </div>

      {
        !menuMobile ? (
          <button 
            className={style.userOptions} 
            onClick={() => setAberto(!aberto)}
            // onBlur={() => setAberto(false)}
          >
            <FaUserAlt />
            <p>ADMIN</p>
          </button>
        ) : (
          <button 
            className={style.userOptions} 
            onClick={() => setAberto(!aberto)}
            // onBlur={() => setAberto(false)}
          >
            {
              !aberto ?
                <FaBars /> :
                <FaTimes />
            }
          </button>
        )
      }


      <Menu aberto={aberto} setAberto={setAberto} />
    </div>
  );
}

export default Header;