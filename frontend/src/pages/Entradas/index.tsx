import Button from 'components/Button';
import InputField from 'components/InputField';
import SelectField from 'components/SelectField';
import ICategoriaDespesa from 'interfaces/ICategoriaDespesa';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import style from './Entradas.module.scss';

const Entradas = () => {
  const [categoriasEntradas, setCategoriasEntradas] = useState<ICategoriaDespesa[]>([
    {
      id: "",
      value: "Selecione uma categoria"
    },
    {
      id: "1",
      value: "Salário"
    },
    {
      id: "2",
      value: "Extras"
    },
    {
      id: "3",
      value: "Aluguel"
    },
  ]);

  return (    
    <div className={style.content}>

      <div className={style.row}>

        <div className={style.col} style={{width: '35%'}}>

          {/* TODO: quando montar o componente passar um parâmetro para dizer se exibe o campo cor ou não */}
          <div className={style.cardCategoryRegisterForm}>

            <div className={style.categoryRegisterForm}>
            
              <InputField 
                label='Nome da entrada'
                placeholder='Digite o nome da entrada de dinheiro...'
                type='text'
              />

              <SelectField 
                label='Nome da categoria'
                placeholder='Escolha uma categoria'
                id="selectCategorias"
                data={categoriasEntradas}
              />

              <Button>Salvar</Button>

            </div>

          </div>

        </div>

        <div className={style.col} style={{width: '65%'}}>

          <div className={style.cardCategoryEntryTable}>

            <table className={style.categoryEntryTable}>

              <thead>
                <tr>
                  <th>Nome da entrada</th>
                  <th>Categoria</th>
                  <th>Data de criação</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                  <tr>
                    <td> Salário </td>
                    <td> Salario </td>
                    <td> 06 de Set de 2022 </td>
                    <td> <FaPencilAlt /> </td>
                    <td> <FaTrashAlt /> </td>
                  </tr>
                  <tr>
                    <td> 13º Salário </td>
                    <td> Salario </td>
                    <td> 06 de Set de 2022 </td>
                    <td> <FaPencilAlt /> </td>
                    <td> <FaTrashAlt /> </td>
                  </tr>
                  <tr>
                    <td> Freelas </td>
                    <td> Extra </td>
                    <td> 06 de Set de 2022 </td>
                    <td> <FaPencilAlt /> </td>
                    <td> <FaTrashAlt /> </td>
                  </tr>
                  <tr>
                    <td> Investimentos </td>
                    <td> Extra </td>
                    <td> 06 de Set de 2022 </td>
                    <td> <FaPencilAlt /> </td>
                    <td> <FaTrashAlt /> </td>
                  </tr>
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

export default Entradas;