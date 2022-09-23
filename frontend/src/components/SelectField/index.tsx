import style from './SelectField.module.scss';

interface Props {
  label: string;
  placeholder: string;
  id: string;
}

const SelectField = (props: Props) => {
  const data = [
    {
      id: "",
      value: props.placeholder
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
  ];

  return (
    <div className={style.SelectField}>
      <label className={style.label}>{props.label}</label>
      {/* <input className={style.input} type={props.type} placeholder={props.placeholder} /> */}
      <select className={style.select} id={props.id}>
        {data.map(element => <option key={element.id} value={element.id}>{element.value}</option>)}
      </select>
    </div>
  );
}

export default SelectField;