import React from 'react';

import style from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  handleClick: () => void
}

const Button = (props: Props) => {
  return (
    <div className={style.button}>
      <button onClick={() => props.handleClick()}>{props.children}</button>
    </div>
  );
}

export default Button;