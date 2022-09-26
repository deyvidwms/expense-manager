import classNames from 'classnames';
import { Link } from 'react-router-dom';

import style from './Menu.module.scss';

interface Props {
  aberto: boolean;
  setAberto: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: Props) => {
  return (
    <div className={classNames({
        [style.menu] : true,
        [style.active] : props.aberto,
      })} 
    >
      <Link onClick={( () => props.setAberto(false) )} to="">
        <p>Home</p>
      </Link>

      <Link onClick={( () => props.setAberto(false) )} to="entradas">
        <p>Entradas de dinheiro</p>
      </Link>

      <Link onClick={( () => props.setAberto(false) )} to="despesas">
        <p>Despesas</p>
      </Link>

      <Link onClick={( () => props.setAberto(false) )} to="../">
        <p>Sair</p>
      </Link>

    </div>
  );
}

export default Menu;