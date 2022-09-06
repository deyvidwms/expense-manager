import React from 'react';

import style from './CardAction.module.scss';

interface Props {
  children: React.ReactNode;
  title: String;
}

function CardAction(props : Props) {
  return (
    <div className={style.cardAction}>
      { props.children }
      <p className={style.title}>{props.title}</p>
    </div>
  );
}

export default CardAction;