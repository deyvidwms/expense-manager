import React from 'react';

import style from './InputColor.module.scss';

interface Props {
  label: string;
}

const InputColor = (props: Props) => {
  return (
    <div className={style.InputColor}>
      <label className={style.label}>{props.label}</label>
      <div className={style.colorFields}>
        <input type="text" className={style.input} placeholder="Digite o hash da cor"/>
        <input className={style.input} type="color" />
      </div>
    </div>
  );
}

export default InputColor;