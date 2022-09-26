import ICategoriaDespesa from 'interfaces/ICategoriaDespesa';
import style from './SelectField.module.scss';

interface Props {
  id: string;
  label: string;
  placeholder: string;
  data: ICategoriaDespesa[];
}

const SelectField = (props: Props) => {
  return (
    <div className={style.SelectField}>
      <label className={style.label}>{props.label}</label>
      <select className={style.select} id={props.id}>
        {props.data.map(element => <option key={element.id} value={element.id}>{element.value}</option>)}
      </select>
    </div>
  );
}

export default SelectField;