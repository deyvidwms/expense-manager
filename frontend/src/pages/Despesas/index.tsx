import Button from 'components/Button';
import InputField from 'components/InputField';
import InputFieldMoney from 'components/InputFieldMoney';
import SelectField from 'components/SelectField';
import ICategoria from 'interfaces/ICategoria';
import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import style from './Despesas.module.scss';

const Despesas = () => {
  const [colspan, setColspan] = useState<number>(1);
  
  const categoriesList = localStorage.getItem('categoriasDespesa') || null;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoriasDespesas, setCategoriasDespesas] = useState<ICategoria[]>(categoriesList !== null ? JSON.parse(categoriesList) : []);
  const [tituloDespesa, setTituloDespesa] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');


  useEffect(() => {
    function setTableResponsivity() {
      if ( window.innerWidth <= 420)
        setColspan(5);
      else
        setColspan(1);
    } 
    setTableResponsivity();
    window.addEventListener('resize', setTableResponsivity)
  }, []);

  return (    
    <div className={style.content}>

      <div className={style.row}>

        <div className={style.col} style={{width: '35%'}}>

          {/* TODO: quando montar o componente passar um parâmetro para dizer se exibe o campo cor ou não */}
          <div className={style.cardCategoryRegisterForm}>

            <div className={style.categoryRegisterForm}>
            
              <InputField 
                label='Nome da despesa'
                placeholder='Digite o nome da despesa de dinheiro...'
                type='text'
                valor={tituloDespesa}
                setValor={setTituloDespesa}
              />

              <SelectField 
                label='Nome da categoria'
                placeholder='Escolha uma categoria'
                id="selectCategorias"
                data={categoriasDespesas}
                valor={categoria}
                setValor={setCategoria}
              />

              <InputField
                label='Descrição da despesa'
                placeholder='Descreva a despesa...'
                type='text'
                valor={descricao}
                setValor={setDescricao}
              />

              <InputFieldMoney 
                label='Valor da despesa'
                placeholder='Digite o valor da despesa...'
                valor={valor}
                setValor={setValor}
              />

              <Button handleClick={()=>void(0)}>Salvar</Button>

            </div>

          </div>

        </div>

        <div className={style.col} style={{width: '65%'}}>

          <div className={style.cardCategoryEntryTable}>

            <table className={style.categoryEntryTable}>

              <thead>
                <tr>
                  <th colSpan={colspan}>Nome da despesa</th>
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

export default Despesas;