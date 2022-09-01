import React from 'react';

import style from './CardPrice.module.scss';

import Utils from '../../assets/js/Utils';

interface Props {
  title: String;
  amount: number;
}

const CardPrice = (props: Props) => {
  return (
    <div className={style.cardPrice}>

      <p className={style.title}>{props.title}</p>

      <h1 className={style.amountDeposit}>
        <span>R$</span>
        { Utils.convertToMoney(props.amount) }
      </h1>

    </div>
  );
}

export default CardPrice;