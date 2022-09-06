import React from 'react';
import Header from '../../components/Header';
import CardPrice from '../../components/CardPrice';
import CardAction from '../../components/CardAction';
import ExpenseTable from '../../components/ExpenseTable';
import ExpenseChart from '../../components/ExpenseChart';

import { FaMoneyBillWave, FaFileDownload, FaCartArrowDown } from "react-icons/fa";
import { BiListPlus } from "react-icons/bi";

import style from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className={style.content}>

        <div className={style.row}>

          <div className={style.column}>

            <CardPrice title="Total de entradas" amount={5000}/>

          </div>

          <div className={style.column}>

            <CardPrice title="Total de despesas" amount={1450}/>

          </div>

        </div>

        <div className={style.row}>

          <div className={style.column}>

            <CardAction title='Cadastrar categoria de entradas'>
              <FaFileDownload fill='#407189' />
            </CardAction>

          </div>

          <div className={style.column}>

            <CardAction title='Cadastrar entradas'>
              <FaMoneyBillWave fill='#5b8936' />
            </CardAction>

          </div>

          <div className={style.column}>

            <CardAction title='Cadastrar categoria de despesas'>
              <BiListPlus fill='#4e70dd' />
            </CardAction>

          </div>

          <div className={style.column}>

            <CardAction title='Cadastrar despesas'>
              <FaCartArrowDown fill='#e3972e' />
            </CardAction>

          </div>

        </div>

        <div className={style.row}>

          <div className={style.column} style={{width: '45%'}}>

            <ExpenseChart />

          </div>

          <div className={style.column}>

            <ExpenseTable />

          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;