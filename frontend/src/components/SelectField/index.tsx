import ICategoria from 'interfaces/ICategoria';
import style from './SelectField.module.scss';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  data: ICategoria[];
  valor: string;
  setValor: React.Dispatch<React.SetStateAction<string>>;
}

const SelectField = (props: Props) => {
  return (
    <div className={style.SelectField}>
      <label className={style.label}>{props.label}</label>
      <select 
        className={style.select} 
        id={props.id} 
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => props.setValor(event.target.value)}
        disabled={ props.data.length===0 }
      >
        {
          props.data.length > 0 ?
            props.data.map( element => (
              element.id === props.valor ?
                <option key={element.id} value={element.id} selected>{element.name}</option> :
                <option key={element.id} value={element.id}>{element.name}</option> 
            ) ) :
            <option>Nenhuma categoria encontrada</option>
        }
      </select>
    </div>
  );
}

export default SelectField;