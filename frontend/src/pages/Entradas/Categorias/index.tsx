import React, { useState } from 'react';

import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

import { FaAngleRight, FaAngleLeft, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import style from './Categorias.module.scss';

const CategoriasEntradas = () => {
  const categoriesList = localStorage.getItem('categoriasEntrada') || null;
  const [categorias, setCategorias] = useState<{ id: string, name: string, created_at: string }[]>(categoriesList !== null ? JSON.parse(categoriesList) : []);
  const [categoria, setCategoria] = useState<string>('');

  const handleChange = (value: string) => {
    setCategoria(value);
  }

  const handleClick = () => {
    if (categoria.length > 0) {
      const localCategories = localStorage.getItem('categoriasEntrada') || null;

      const currentDate = new Date();
      const createdAt = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getMilliseconds()}`;
      const id = `${crypto.randomUUID()}-${createdAt}`;

      const category = {
        id: id,
        name: categoria,
        created_at: createdAt
      }

      const tempCategories = localCategories !== null ? JSON.parse(localCategories) : [];
      tempCategories.push(category);
      localStorage.setItem('categoriasEntrada', JSON.stringify(tempCategories));
      setCategorias(tempCategories);
    }
  }

  return (
    <div className={style.content}>

      <div className={style.row}>

        <div className={style.col} style={{ width: '35%' }}>

          {/* TODO: quando montar o componente passar um parâmetro para dizer se exibe o campo cor ou não */}
          <div className={style.cardCategoryRegisterForm}>

            <div className={style.categoryRegisterForm}>

              <InputField
                label='Nome da categoria'
                placeholder='Digite o nome da categoria...'
                type='text'
                categoria={categoria}
                handleChange={handleChange}
              />

              <Button handleClick={handleClick}>Salvar</Button>

            </div>

          </div>

        </div>

        <div className={style.col} style={{ width: '65%' }}>

          <div className={style.cardCategoryEntryTable}>

            <table className={style.categoryEntryTable}>

              <thead>
                <tr>
                  <th>Nome da categoria</th>
                  <th>Data de criação</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {
                  categorias.length > 0 ?
                  categorias.map(element => {
                    const months = [
                      { name: 'Janeiro', sig: 'Jan' },
                      { name: 'Fevereiro', sig: 'Fev' },
                      { name: 'Março', sig: 'Mar' },
                      { name: 'Abril', sig: 'Abr' },
                      { name: 'Maio', sig: 'Mai' },
                      { name: 'Junho', sig: 'Jun' },
                      { name: 'Julho', sig: 'Jul' },
                      { name: 'Agosto', sig: 'Ago' },
                      { name: 'Setembro', sig: 'Set' },
                      { name: 'Outubro', sig: 'Out' },
                      { name: 'Novembro', sig: 'Nov' },
                      { name: 'Dezembro', sig: 'Dez' }
                    ];

                    const createdAtSlipted = element.created_at.split("-");

                    const createdAt = `${createdAtSlipted[2].length === 1 ?
                      `0${createdAtSlipted[2]}` :
                      createdAtSlipted[2]
                      } de ${months[(Number(createdAtSlipted[1]) - 1)].name.toLocaleLowerCase()} de ${createdAtSlipted[0]}`;

                    return (
                      <tr key={element.id}>
                        <td> {element.name} </td>
                        <td> {createdAt} </td>
                        <td> <FaPencilAlt /> </td>
                        <td> <FaTrashAlt /> </td>
                      </tr>
                    )
                  }) : 
                  (
                    <tr>
                      <td colSpan={4} style={{textAlign: 'center'}}>Nenhuma informação encontrada</td>
                    </tr>
                  )
                }
              </tbody>

            </table>

            <div className={style.pagination}>

              <p className={style.paginationBeforeButton}>
                <FaAngleLeft />
              </p>

              <div className={style.paginationList}>
                <p className={style.paginationItem} data-active="true">1</p>
                <p className={style.paginationItem}>2</p>
                <p className={style.paginationItem}>3</p>
                <p className={style.paginationItem}>4</p>
                <p className={style.paginationItem}>5</p>
              </div>

              <p className={style.paginationAfterButton}>
                <FaAngleRight />
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CategoriasEntradas;