import React from 'react';
import { Link } from 'react-router-dom';

import style from './CardAction.module.scss';

interface Props {
  children: React.ReactNode;
  title: string;
  link: string;
}

function CardAction(props : Props) {
  return (
    <Link to={props.link} className={style.cardAction}>
      { props.children }
      <p className={style.title}>{props.title}</p>
    </Link>
  );
}

export default CardAction;