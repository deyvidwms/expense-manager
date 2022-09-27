import React, { useEffect, useState } from 'react';
import Menu from './Menu';

import style from './Header.module.scss';

import logoWeb from 'assets/images/logo.svg';
import logoMobile from 'assets/images/logo-mobile.svg';

// import { ReactComponent as Logo } from 'assets/images/logo.svg';
// import { ReactComponent as LogoMobile } from 'assets/images/logo-mobile.svg';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [aberto, setAberto] = useState(false);
  const [logo, setLogo] = useState<string>(logoWeb);

  useEffect(() => {
    function setLogoHeader() {
      if ( window.innerWidth <= 480 )
        setLogo(logoMobile);
      else
        setLogo(logo);

    } 
    setLogoHeader();
    window.addEventListener('resize', setLogoHeader);
  }, []);


  return (
    <div className={style.header}>
      
      <div className={style.logo}>
        <img src={logo} alt="Logo do projeto" />
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