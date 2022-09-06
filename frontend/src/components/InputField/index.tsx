import React from 'react';

import style from './InputField.module.scss';

interface Props {
  label: string;
  type?: "text" | "password";
  placeholder: string;
}

const InputField = (props: Props) => {
  return (
    <div className={style.InputField}>
      <label className={style.label}>{props.label}</label>
      <input className={style.input} type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

export default InputField;