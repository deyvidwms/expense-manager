import React, { useState } from 'react';
import classNames from 'classnames';

import style from './InputColor.module.scss';

interface Props {
  label: string;
  cor: string;
  setCor: React.Dispatch<React.SetStateAction<string>>;
}

const InputColor = (props: Props) => {
  const [selecionado, setSelecionado] = useState<boolean>(false);

  return (
    <div className={style.InputColor}>
      <label className={style.label}>{props.label}</label>
      <div 
        id="colorFields" 
        className={classNames({
          [style.colorFields]: true,
          [style.active] : selecionado
        })}
      >
        <input 
          type="text"
          onChange={(event)=> { props.setCor(event.target.value) }} 
          onFocus={() => setSelecionado(true)} 
          onBlur={()=> setSelecionado(false)} 
          value={props.cor}
          className={style.input}
          placeholder="Digite o hash da cor"
          minLength={6}
          maxLength={6}
          pattern="[a-zA-Z0-9]{6}"
        />
        <input 
          className={style.input} 
          onChange={(event)=> { if(event.target.value.length === 7) { props.setCor(event.target.value.substring(1)) } }} 
          onFocus={() => setSelecionado(true)} 
          onBlur={()=> setSelecionado(false)}
          value={`${
            props.cor.length === 6 ?
              props.cor.indexOf("#") !== -1 ? 
                props.cor : 
                `#${props.cor}`
            :
              '#FFFFFF'
          }`} 
          type="color" 
        />
      </div>
    </div>
  );
}

export default InputColor;