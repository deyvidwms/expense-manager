import { useState } from 'react';

import style from './InputFieldMoney.module.scss';

interface Props {
  label: string;
  placeholder: string;
}

const InputFieldMoney = (props: Props) => {
  const [valor, setValor] = useState<string>("");

  const verificaQtdCaracteres = (texto: string) => {
    return texto.split("").filter( caracter => caracter === ",").length;
  }
  
  const inputMoneyConvert = (valorConvert : string) => {
    valorConvert = valorConvert.replaceAll(".","");
   
    if ( verificaQtdCaracteres(valorConvert) > 1 || isNaN( Number(valorConvert.replace(",",".")) ) )
      return valor;

    if (valorConvert.indexOf(",") !== -1) {
      let firstZero = valorConvert.split(",")[1][0] !== undefined ? valorConvert.split(",")[1][0] : '';
      let secondZero = valorConvert.split(",")[1][1] !== undefined ? valorConvert.split(",")[1][1] : '';
      valorConvert = `${valorConvert.split(",")[0]},${firstZero}${secondZero}`;
    }

    return valorConvert;
  }

  return (
    <div className={style.InputFieldMoney}>
      <label className={style.label}>{props.label}</label>
      <input className={style.input} type='text' onChange={evento => setValor(inputMoneyConvert(evento.target.value))} value={valor} placeholder={props.placeholder} />
    </div>
  );
}

export default InputFieldMoney;