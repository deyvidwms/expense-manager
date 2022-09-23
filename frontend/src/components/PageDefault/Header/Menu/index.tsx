import React from 'react';

import style from './Menu.module.scss';

interface Props {
  toggle: string;
}

const Menu = (props: Props) => {
  return (
    <div className={style.menu} data-toggle={props.toggle}>
      <p>Home</p>
      <p>Entradas de dinheiro</p>
      <p>Categorias</p>
      <p>Cobranças</p>
    </div>
  );
}

export default Menu;