import React from 'react';

import { FaArrowRight, FaSearch } from "react-icons/fa";
import Utils from '../../assets/js/Utils';


import style from './ExpenseTable.module.scss';

const ExpenseTable = () => {
  const data = [
    {
      id: 1,
      description: "Sorvete",
      category: "Comida",
      amount: 5.00
    },
    {
      id: 2,
      description: "Sanduíche na Lanchonete da esquina",
      category: "Comida",
      amount: 15.00
    },
    {
      id: 3,
      description: "Almoço na marmitaria da esquina",
      category: "Comida",
      amount: 10.00
    },
    {
      id: 4,
      description: "Açaí pelo iFood",
      category: "Comida",
      amount: 12.00
    },
    {
      id: 5,
      description: "Pastel",
      category: "Comida",
      amount: 5.00
    },

  ];

  return (
    <div className={style.cardExpenseTable}>
                
      <table className={style.expenseTable}>

        <thead>
          <tr>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((item)=>(
              <tr key={item.id}>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{Utils.convertToMoneyBRL(item.amount)}</td>
                <td> <FaSearch /> </td>
              </tr>
            ))
          }
        </tbody>

      </table>

      <div className={style.pagination}>
        <p>Visualizar mais</p>
        <FaArrowRight />
      </div>

    </div>
  );
}

export default ExpenseTable;