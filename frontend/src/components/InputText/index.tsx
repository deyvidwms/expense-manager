import React from 'react';

import style from './InputText.module.scss';

interface Props {
  label: string;
  placeholder: string;
}

const InputText = (props: Props) => {
  return (
    <div className={style.inputText}>
      <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default InputText;